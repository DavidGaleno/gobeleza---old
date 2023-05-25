//Images
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'


import styles from './styles.module.css'
export const PasswordRecoveryByPhoneScreen = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <form className={styles.form}>
        <Input type='text' placeholder="Digite seu número de telefone" mask="phoneNumber" />
        <div className={styles.buttons}>
            <ActionButton value="Confirmar →" />
            <ActionButton value="Voltar ←" />
        </div>
      </form>
    </div >
  )
}