//Images
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'
import styles from './styles.module.css'
import { File } from '../../components/File'
export const CadastrarPessoaJuridica = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <form className={styles.form}>
        <Input type='text' placeholder="Digite seu CNPJ" mask='cpf' />
        <Input type='text' placeholder="Digite seu Nome" />
        <Input type='text' placeholder="Digite seu Telefone" mask="phoneNumber" />
        <div className={styles.endereco}>
          <Input type='text' placeholder="Endereço" />
          <Input type='text' placeholder="Complemento" />
          <Input type='text' placeholder="Número ou S/N" />
        </div>
        <File label='Adicione uma foto do salão' />
        <div className={styles.buttons}>
          <ActionButton value="Confirmar →" />
          <ActionButton value="Voltar ←" />
        </div>
      </form>
    </div >
  )
}