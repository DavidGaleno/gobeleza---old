//Images
import { z } from 'zod'
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'
import { FormProvider, useForm } from 'react-hook-form'

import styles from './styles.module.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'


const pixPaymentSchema = z.object({
  pix: z.string().nonempty('*Obrigatório')
})



export const PIXPaymentScreen = () => {

  const navigate = useNavigate()

  type pixPaymentType = z.infer<typeof pixPaymentSchema>

  const pixPaymentUseForm = useForm<pixPaymentType>({
    resolver: zodResolver(pixPaymentSchema)
  })

  const avancar = (data: pixPaymentType) => {
    console.log(data)
    navigate('/catalogo_itens')
  }

  const { handleSubmit, formState: { errors } } = pixPaymentUseForm

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <FormProvider {...pixPaymentUseForm}>
        <form onSubmit={handleSubmit(avancar)} className={styles.form}>
          <Input error={errors.pix?.message} registerName='pix'  type='text' placeholder="Digite a chave PIX" />
          <div className={styles.buttons}>
            <ActionButton value="Confirmar →" />
            <ActionButton value="Voltar ←" path='/pagamento_opcoes' />
          </div>
        </form>
      </FormProvider>
    </div >
  )
}