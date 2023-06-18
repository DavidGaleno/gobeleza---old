//Images
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'
import { z } from 'zod'

import styles from './styles.module.css'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'

const passwordRecoveryByEmailSchema = z.object({
  email: z.string().nonempty('*Obrigatório').email('Formato de Email inválido').transform(email => email.toLocaleLowerCase()).refine(email => email.endsWith('@gmail.com') || email.endsWith('@hotmail.com'), {
    message: 'O E-mail deve terminar com @gmail.com ou @hotmail.com'
  })
})



export const PasswordRecoveryByEmailScreen = () => {
  const navigate = useNavigate()

  type passwordRecoveryByEmailType = z.infer<typeof passwordRecoveryByEmailSchema>

  const passwordRecoveryByEmailUseForm = useForm<passwordRecoveryByEmailType>({
    resolver: zodResolver(passwordRecoveryByEmailSchema)
  })

  const { handleSubmit, formState: { errors } } = passwordRecoveryByEmailUseForm
  const enviar = (data: passwordRecoveryByEmailType) => {
    navigate('/recuperar_senha_chave')
    console.log(data)
  }
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <FormProvider {...passwordRecoveryByEmailUseForm}>
        <form onSubmit={handleSubmit(enviar)} className={styles.form}>
          <Input value='' error={errors.email?.message} registerName='email' type='text' placeholder="Digite seu Email" mask="email" />
          <div className={styles.buttons}>
            <ActionButton type="submit" value="Confirmar →" />
            <ActionButton type="button" value="Voltar ←" path='/recuperar_senha_opcoes' />
          </div>
        </form>
      </FormProvider>
    </div >
  )
}