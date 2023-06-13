//Images
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'
import { z } from 'zod'

import styles from './styles.module.css'
import { Select } from '../../components/Select'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { CheckLogin } from '../../components/CheckLogin'


export const CardPaymentScreen = () => {
  const cartaoPagamentoSchema = z.object({
    numero: z.string().nonempty('*Obrigatório'),
    titular: z.string().nonempty('*Obrigatório'),
    vencimentoData: z.string().nonempty('*Obrigatório').refine(text => {
      const date = new Date(text)
      return Number(date.getFullYear()) > 1940 && Number(date.getFullYear()) < 2042
    }, { message: 'Escolha uma data mais recente' }),
    cvv: z.coerce.string().nonempty('*Obrigatório'),
    modalidade: z.string().nonempty('*Obrigatório'),
    parcelas: z.string().nonempty('*Obrigatório')
  })

  const navigate = useNavigate()

  type cartaoPagamentoType = z.infer<typeof cartaoPagamentoSchema>

  const cartaoPagamentoUserForm = useForm<cartaoPagamentoType>({
    resolver: zodResolver(cartaoPagamentoSchema)
  })

  const { register, handleSubmit, formState: { errors } } = cartaoPagamentoUserForm

  const pagar = (data: cartaoPagamentoType) => {
    console.log(data)
    navigate('/catalogo_itens')
  }


  const [modalidade, setModalidade] = useState('')
  return (
    <div className={styles.container}>
      <CheckLogin />

      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <FormProvider {...cartaoPagamentoUserForm}>
        <form onSubmit={handleSubmit(pagar)} className={styles.form}>
          <Input error={errors.numero?.message} registerName='numero' type='text' placeholder="Digite o número do cartão" />
          <Input error={errors.titular?.message} registerName='titular' type='text' placeholder="Digite o nome do titular do cartão" />
          <Input error={errors.vencimentoData?.message} registerName='vencimentoData' type='date' placeholder="Digite a data de vencimento do cartão" />
          <Input error={errors.cvv?.message} registerName='cvv' fatherClass={`${styles.cvv}`} type='number' placeholder="Digite o CVV" />
          <Select error={errors.modalidade?.message} registerName='modalidade' onChange={(e) => setModalidade(e.target.value)} label="Selecione a modalidade do cartão" options={['Débito', 'Crédito']} />
          {modalidade === 'Crédito' &&
            <Select registerName={'parcelas'} label="Selecione o número de parcelas" options={['1X', '2X', '4X', '6X', '8X', '10X', '12X']} />
          }
          {modalidade === 'Débito' &&
            <input {...register('parcelas')} type="hidden" name="" value={'1X'} />
          }
          <div className={styles.buttons}>
            <ActionButton value="Confirmar →" />
            <ActionButton value="Voltar ←" path='/pagamento_opcoes' />
          </div>
        </form>
      </FormProvider>
    </div >
  )
}