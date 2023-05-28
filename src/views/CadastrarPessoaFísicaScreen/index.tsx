//Images
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'


import styles from './styles.module.css'
import { Select } from '../../components/Select'
export const CadastrarPessoaFisica = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <form className={styles.form}>
        <Input type='text' placeholder="Digite seu Email" mask="email" />
        <Input type='text' placeholder="Digite seu CPF" mask='cpf' />
        <Input type='text' placeholder="Digite seu Nome" />
        <Input type='text' placeholder="Digite seu Telefone" mask="phoneNumber" />
        <Select label='Selecione seu Sexo' options={['Masculino', 'Feminino']} />
        <div className={styles.endereco}>
          <Input type='text' placeholder="Endereço" />
          <Input type='text' placeholder="Complemento" />
          <Input type='text' placeholder="Número ou S/N" />
        </div>
        <Input type='password' placeholder="Digite sua senha" />
        <Input type='password' placeholder="Confirme sua senha" />
        <div className={styles.buttons}>
          <ActionButton value="Confirmar →" />
          <ActionButton value="Voltar ←" />
        </div>
      </form>
    </div >
  )
}