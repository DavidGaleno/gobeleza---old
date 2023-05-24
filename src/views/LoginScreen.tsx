import logo from '../assets/logo.png'
import styles from './styles.module.css'
import { Input } from '../components/Input/Input'
export const LoginScreen = ()=> {
  return(
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <Input type='text' placeholder="Digite seu Email ou CPF"/>
    </div>
  )
}