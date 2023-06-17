//Images
import { z } from 'zod'
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'
import { useForm, FormProvider } from 'react-hook-form'

const passwordRecoveryByPhoneSchema = z.object({
  telefone: z.string().nonempty('*Obrigatório')

})


import styles from './styles.module.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
export const PasswordRecoveryByPhoneScreen = () => {
  const navigate = useNavigate()

  type passwordRecoveryByPhoneType = z.infer<typeof passwordRecoveryByPhoneSchema>


  const passwordRecoveryByPhoneUseForm = useForm<passwordRecoveryByPhoneType>({
    resolver: zodResolver(passwordRecoveryByPhoneSchema)
  })

  const { handleSubmit, formState: { errors } } = passwordRecoveryByPhoneUseForm

  const enviar = (data: passwordRecoveryByPhoneType) => {
    console.log(data)
    navigate('/recuperar_senha_chave')
  }

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <FormProvider {...passwordRecoveryByPhoneUseForm}>
        <form onSubmit={handleSubmit(enviar)} className={styles.form}>
          <Input error={errors.telefone?.message} registerName='telefone' type='text' placeholder="Digite seu número de telefone" mask="phoneNumber" />
          <div className={styles.buttons}>
            <ActionButton type="submit" value="Confirmar →" />
            <ActionButton type="button" value="Voltar ←" path='/recuperar_senha_opcoes' />
          </div>
        </form>
      </FormProvider>
    </div >
  )
}