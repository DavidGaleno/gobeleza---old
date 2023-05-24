//Images
import logo from '../../assets/logo.png'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'


import styles from './styles.module.css'
export const CadastrarPessoaFisica = () => {
    return(
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <form className={styles.form}>
        <Input type='text' placeholder="Digite seu Email ou CPF"/>
        <Input type='password' placeholder="Digite sua senha"/>
        <Button value="Confirmar →"/>
      </form>
    </div>
    )
}