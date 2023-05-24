//Images
import logo from '../../assets/logo.png'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'


import styles from './styles.module.css'
export const RecoveryKeyScreen = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <form className={styles.form}>
        <Input type='text' placeholder="Digite o código recebido" />
        <div className={styles.buttons}>
            <Button value="Confirmar →" />
            <Button value="Vasdasdoltar ←" />
        </div>
      </form>
    </div >
  )
}