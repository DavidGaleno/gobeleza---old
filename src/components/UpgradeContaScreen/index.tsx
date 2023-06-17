import { ActionButton } from "../ActionButton"
import { Input } from "../Input"
import styles from './styles.module.css'
import { Campo } from "../Campo"
import { z } from "zod"
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useEffect, useState } from "react"
import { UsuariosContext } from "../../Context/UsuariosContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import { CheckLogin } from "../CheckLogin"
interface Props {
    label: string
    value: string
    visible: boolean
    setVisible: (visible: boolean) => void
}


export const UpgradeContaScreen = ({ label, value, visible, setVisible }: Props) => {

    const { loggedAccount, setLoggedAccount, usuarios, setUsuarios, specialPasswordUser } = useContext(UsuariosContext)
    const [showSenhaEspecial, setShowSenhaEspecial] = useState(false)

    useEffect(() => {
        const updatedLoggedAccount = usuarios.filter(usuario => usuario.id === loggedAccount.id)
        setLoggedAccount(updatedLoggedAccount[0])
    }, [usuarios, loggedAccount.id, setLoggedAccount])


    const upgradeContaSchema = z.object({
        senhaEspecial: z.string()
            .nonempty('*Obrigatório')
            .min(16, 'A senha especial possui 16 caracteres')
            .max(16, 'A senha especial possui 16 caracteres')
            .refine(senhaEspecial => {
                return specialPasswordUser.some(cadastro => cadastro.specialPassword === senhaEspecial);
            }, { message: 'Essa senha não existe' })
    });
    type changeDataUseFormType = z.infer<typeof upgradeContaSchema>
    const changeDataUseForm = useForm<changeDataUseFormType>({
        resolver: zodResolver(upgradeContaSchema)
    })
    const upgrade = (data: changeDataUseFormType) => {
        console.log('i')
        specialPasswordUser.forEach(cadastro => {
            if (cadastro.specialPassword === data.senhaEspecial && loggedAccount.id === cadastro.userId) {
                const updatedUser = loggedAccount
                updatedUser.tipoConta = 'Funcionário'
                setUsuarios(prevUsuarios => {
                    const updatedUsers = [...prevUsuarios]
                    updatedUsers[prevUsuarios.indexOf(loggedAccount)] = updatedUser
                    return updatedUsers
                })

            }
        })
    }

    const { handleSubmit, formState: { errors } } = changeDataUseForm
    return (
        <>
            <CheckLogin />
            <div className={`${styles.fade} ${visible ? '' : styles.hide}`} ></div>
            <FormProvider {...changeDataUseForm}>
                <form onSubmit={handleSubmit(upgrade)} className={`${styles.container} ${visible ? '' : styles.hide}`} >
                    <Campo shortValue={false} fatherClass={styles.value} label={label} value={value} changeValue={false} />
                    <div className={styles.senhaEspecialContainer}>
                        <Input error={errors.senhaEspecial?.message} registerName={'senhaEspecial'} type={showSenhaEspecial ? 'text' : 'password'} placeholder="Insira sua senha" fatherClass={styles.value} />
                        {showSenhaEspecial ? <FontAwesomeIcon className={styles.passwordIcon} size="3x" icon={faEye} onClick={() => setShowSenhaEspecial(!showSenhaEspecial)} /> : <FontAwesomeIcon className={styles.passwordIcon} onClick={() => setShowSenhaEspecial(!showSenhaEspecial)} size="3x" icon={faEyeSlash} />}
                    </div>
                    <div className={styles.buttons}>
                        <ActionButton value="Voltar ←" onClick={() => setVisible(!visible)} />
                        <ActionButton value="Confirmar →" />
                    </div>
                    {loggedAccount.tipoConta !== 'Cliente' &&
                        <div className={styles.buttons}>
                            <ActionButton value="Cliente ←" onClick={() => setVisible(!visible)} />
                        </div>
                    }
                </form>
            </FormProvider>
        </>
    )
}