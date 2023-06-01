//Images
import logo from '../../assets/logo.png'
import googleIcon from '../../assets/google-icon.png'
import appleIcon from '../../assets/apple-icon.png'

//CSS
import styles from './styles.module.css'

//Components
import { Input } from '../../components/Input'
import { SubText } from '../../components/SubText'
import { ActionButton } from '../../components/ActionButton'
import { LoginIcon } from '../../components/LoginIcon'
import { Line } from '../../components/Line'


export const LoginScreen = ()=> {
  return(
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <form className={styles.form}>
        <Input type='text' placeholder="Digite seu Email ou CPF"/>
        <Input type='password' placeholder="Digite sua senha"/>
        <SubText value='Esqueceu a senha?'/>
        <ActionButton value="Confirmar →" path="/catalogo_saloes"/>
        <div className={styles.loginIcons}>
          <div className={styles.line}></div>
          <Line/>
          <LoginIcon image={googleIcon} alt={"Google"}/>
          <LoginIcon image={appleIcon} alt={"Apple"}/>
          <Line/>
        </div>
        <SubText value='Ainda não tem uma conta? Cadastre-se' />
      </form>
    </div>
  )
}