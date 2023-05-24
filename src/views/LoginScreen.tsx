import logo from '../assets/logo.png'
import styles from './loginScreen.module.css'
export const LoginScreen = ()=> {
  return(
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
    </div>
  )
}