import logo from '../assets/logo.png'
import googleIcon from '../assets/google-icon.png'
import appleIcon from '../assets/apple-icon.png'

import styles from './styles.module.css'
import { Input } from '../components/Input/Input'
import { SubText } from '../components/SubText/SubText'
import { Button } from '../components/Button/Button'
import { LoginIcon } from '../components/LoginIcon/LoginIcon'
import { Line } from '../components/Line/Line'
export const LoginScreen = ()=> {
  return(
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <form className={styles.form}>
        <Input type='text' placeholder="Digite seu Email ou CPF"/>
        <Input type='password' placeholder="Digite sua senha"/>
        <SubText value='Esqueceu a senha?'/>
        <Button value="Confirmar →"/>
        <div className={styles.loginIcons}>
          <div className={styles.line}></div>
          <LoginIcon image={googleIcon} alt={"Google"}/>
          <LoginIcon image={appleIcon} alt={"Apple"}/>
        </div>
        <SubText value='Ainda não tem uma conta? Cadastre-se'/>
      </form>
    </div>
  )
}