//Images
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'


import styles from './styles.module.css'
import { Select } from '../../components/Select'
export const CardPaymentScreen = () => {
  const [modalidade, setModalidade] = useState('')
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <form className={styles.form}>
        <Input fatherClass={styles.input} type='text' placeholder="Digite o número do cartão" />
        <Input fatherClass={styles.input} type='text' placeholder="Digite o nome do titular do cartão" />
        <Input fatherClass={styles.input} type='text' placeholder="Digite a data de vencimento do cartão" />
        <Input fatherClass={`${styles.input} ${styles.cvv}`} type='text' placeholder="Digite o CVV" />
        <Select onChange={(e) => setModalidade(e.target.value)} label="Selecione a modalidade do cartão" options={['débito', 'crédito']} />
        {modalidade === 'crédito' &&
          <Select label="Selecione o número de parcelas" options={['1X', '2X', '4X', '6X', '8X', '10X', '12X']} />
        }
        <div className={styles.buttons}>
        <ActionButton value="Confirmar →" path='/catalogo_produtos' />
            <ActionButton value="Voltar ←" path='/pagamento_opcoes'/>
        </div>
      </form>
    </div >
  )
}