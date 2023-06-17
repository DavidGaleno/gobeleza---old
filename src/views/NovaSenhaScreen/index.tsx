import styles from './styles.module.css'
import { Input } from '../../components/Input'
import { ActionButton } from '../../components/ActionButton'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

const novaSenhaSchema = z.object({
    password: z.string().nonempty('*Obrigatório').min(8, 'A senha deve ter no mínimo 8 caracteres'),
    passwordMatch: z.string().nonempty('*Obrigatório').min(8, 'A senha deve ter no mínimo 8 caracteres')

}).refine(data => data.password === data.passwordMatch, {
    path: ['passwordMatch'],
    message: 'As duas senhas não coincidem'
})

export const NovaSenhaScreen = () => {

    const navigate = useNavigate()

    type NovaSenhaType = z.infer<typeof novaSenhaSchema>

    const NovaSenhaUseForm = useForm<NovaSenhaType>({
        resolver: zodResolver(novaSenhaSchema)
    })

    const enviar = (data: NovaSenhaType) => {
        console.log(data)
        navigate('/recibo_compra')
    }

    const { handleSubmit, formState: { errors } } = NovaSenhaUseForm

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt="GoBeleza" />
            <FormProvider {...NovaSenhaUseForm}>
                <form onSubmit={handleSubmit(enviar)} className={styles.form}>
                    <Input error={errors.password?.message} registerName='password' type='password' placeholder="Digite sua nova senha" />
                    <Input error={errors.passwordMatch?.message} registerName='passwordMatch' type='password' placeholder="Digite novamente" />
                    <div className={styles.buttons}>
                        <ActionButton type="submit" value="Confirmar →" />
                        <ActionButton type="button" value="Voltar ←" path='/recuperar_senha_opcoes' />
                    </div>
                </form>
            </FormProvider>
        </div >
    )
}