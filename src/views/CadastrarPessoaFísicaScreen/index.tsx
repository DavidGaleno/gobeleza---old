//Images
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'


import styles from './styles.module.css'
export const CadastrarPessoaFisica = () => {
  const [clickedButHasNoValue, setClickedButHasNoValue] = useState(false)
  const [selectHasValue, setSelectHasValue] = useState(false)
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <form className={styles.form}>
        <Input type='text' placeholder="Digite seu Email" mask="email" />
        <Input type='text' placeholder="Digite seu CPF" mask='cpf'/>
        <Input type='text' placeholder="Digite seu Nome" />
        <Input type='text' placeholder="Digite seu Telefone" mask="phoneNumber"/>
        <select style={{ color: selectHasValue || clickedButHasNoValue ? 'black' : 'gray' }} onBlur={() => setClickedButHasNoValue(false)} onClick={() => setClickedButHasNoValue(!clickedButHasNoValue)} onChange={() => setSelectHasValue(true)} name="sexo" id="sexo">
          <option value="" selected hidden>Selecione seu Sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <div className={styles.endereco}>
          <Input type='text' placeholder="Endereço" />
          <Input type='text' placeholder="Complemento" />
          <Input type='text' placeholder="Número ou S/N" />
        </div>
        <Input type='password' placeholder="Digite sua senha" />
        <Input type='password' placeholder="Confirme sua senha" />
        <div className={styles.buttons}>
            <Button value="Confirmar →" />
            <Button value="Voltar ←" />
        </div>
      </form>
    </div >
  )
}