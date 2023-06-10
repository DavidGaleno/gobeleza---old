import { ActionButton } from "../ActionButton"
import { Input } from "../Input"
import styles from './styles.module.css'
import { Campo } from "../Campo"
import { z } from "zod"
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
interface Props {
    label: string
    value: string
    visible: boolean
    setVisible: (visible: boolean) => void
}

const changeDataSchema = z.object({
    novoValor: z.string().nonempty('*Obrigatório'),
    antigoValor: z.string().nonempty('*Obrigatório').min(8,'Sua senha tem no mínimo 8 caracteres')
})

export const ChangeDataScreen = ({ label, value, visible, setVisible }: Props) => {

    type changeDataUseFormType = z.infer<typeof changeDataSchema>
    const changeDataUseForm = useForm<changeDataUseFormType>({
        resolver: zodResolver(changeDataSchema)
    })
    const mudar = (data: changeDataUseFormType) => {
        console.log(data)
    }
    const { handleSubmit, formState: { errors } } = changeDataUseForm
    return (
        <>
            <div className={`${styles.fade} ${visible ? '' : styles.hide}`} ></div>
            <FormProvider {...changeDataUseForm }>
                <form onSubmit={handleSubmit(mudar)} className={`${styles.container} ${visible ? '' : styles.hide}`} >
                    <Campo shortValue={false} fatherClass={styles.value} label={label} value={value} changeValue={false} />
                    <Input error={errors.novoValor?.message} registerName={'novoValor'} placeholder={`Digite o novo valor do campo ${label}`} type={"text"} fatherClass={styles.value} />
                    <Input error={errors.antigoValor?.message} registerName={'antigoValor'} placeholder="Insira sua senha" type={"password"} fatherClass={styles.value} />
                    <div className={styles.buttons}>
                        <ActionButton value="Voltar ←" onClick={() => setVisible(!visible)} />
                        <ActionButton value="Confirmar →" />
                    </div>
                </form>
            </FormProvider>
        </>
    )
}