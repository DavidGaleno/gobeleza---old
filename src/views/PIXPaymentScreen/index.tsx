//Images
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'


import styles from './styles.module.css'
export const PIXPaymentScreen = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <form className={styles.form}>
        <Input fatherClass={styles.input} type='text' placeholder="Digite a chave PIX"/>
        <div className={styles.buttons}>
            <ActionButton value="Confirmar →" path='/catalogo_produtos' />
            <ActionButton value="Voltar ←" path='/pagamento_opcoes'/>
        </div>
      </form>
    </div >
  )
}