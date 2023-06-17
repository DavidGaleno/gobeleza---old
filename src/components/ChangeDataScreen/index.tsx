import { ActionButton } from "../ActionButton"
import { Input } from "../Input"
import styles from './styles.module.css'
import { Campo } from "../Campo"
import { z } from "zod"
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useEffect } from "react"
import { UsuariosContext } from "../../Context/UsuariosContext"
interface Props {
    label: string
    value: string
    visible: boolean
    setVisible: (visible: boolean) => void
}


export const ChangeDataScreen = ({ label, value, visible, setVisible }: Props) => {

    const { loggedAccount, setLoggedAccount, usuarios, setUsuarios } = useContext(UsuariosContext)

    useEffect(() => {
        const updatedLoggedAccount = usuarios.filter(usuario => usuario.id === loggedAccount.id)
        setLoggedAccount(updatedLoggedAccount[0])
    }, [usuarios, loggedAccount.id, setLoggedAccount])


    const changeDataSchema = z.object({
        novoValor: z.string().nonempty('*Obrigatório'),
        password: z.string().nonempty('*Obrigatório').min(8, 'Sua senha tem no mínimo 8 caracteres')
    }).refine(data => data.password === loggedAccount.password, {
        path: ['password'],
        message: 'Sua senha está incorreta'
    })

    type changeDataUseFormType = z.infer<typeof changeDataSchema>
    const changeDataUseForm = useForm<changeDataUseFormType>({
        resolver: zodResolver(changeDataSchema)
    })
    const mudar = (data: changeDataUseFormType) => {
        const atributo = label.toLocaleLowerCase()
        const updatedData = {
            [atributo]: data.novoValor
        }

        const updatedUsuario = usuarios.map(usuario => {
            if (usuario.id === loggedAccount.id) {
                return { ...usuario, ...updatedData }
            }
            return usuario
        })
        setUsuarios(updatedUsuario)
        setVisible(!visible)
    }
    const { handleSubmit, formState: { errors } } = changeDataUseForm
    return (
        <>
            <div className={`${styles.fade} ${visible ? '' : styles.hide}`} ></div>
            <FormProvider {...changeDataUseForm}>
                <form onSubmit={handleSubmit(mudar)} className={`${styles.container} ${visible ? '' : styles.hide}`} >
                    <Campo shortValue={false} fatherClass={styles.value} label={label} value={value} changeValue={false} />
                    <Input error={errors.novoValor?.message} registerName={'novoValor'} placeholder={`Digite o novo valor do campo ${label}`} type={"text"} fatherClass={styles.value} />
                    <Input error={errors.password?.message} registerName={'password'} type="password" placeholder="Insira sua senha" fatherClass={styles.value} />
                    <div className={styles.buttons}>
                        <ActionButton value="Voltar ←" onClick={() => setVisible(!visible)} />
                        <ActionButton value="Confirmar →" />
                    </div>
                </form>
            </FormProvider>
        </>
    )
}