//Images
import { z } from 'zod'
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'
import { FormProvider, useForm } from 'react-hook-form'

import styles from './styles.module.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'

const recoveryKeySchema = z.object({
  key: z.coerce.string().nonempty('*Obrigatório').length(6, 'A chave possui 6 números')
})



export const RecoveryKeyScreen = () => {
  const navigate = useNavigate()

  type recoveryKeyType = z.infer<typeof recoveryKeySchema>

  const recoveryKeyUseForm = useForm<recoveryKeyType>({
    resolver: zodResolver(recoveryKeySchema)
  })

  const { handleSubmit, formState: { errors } } = recoveryKeyUseForm

  const enviar = (data: recoveryKeyType) => {
    console.log(data)
    navigate('/nova_senha')
  }
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <FormProvider {...recoveryKeyUseForm}>
        <form onSubmit={handleSubmit(enviar)} className={styles.form}>
          <Input value='' error={errors.key?.message} registerName='key' type='number' placeholder="Digite o código recebido" />
          <div className={styles.buttons}>
            <ActionButton type="submit" value="Confirmar →" />
            <ActionButton type="button" value="Voltar ←" path='/recuperar_senha_opcoes' />
          </div>
        </form>
      </FormProvider>
    </div >
  )
}