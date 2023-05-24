//Images
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'


import styles from './styles.module.css'
export const PasswordRecoveryByEmailScreen = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <form className={styles.form}>
        <Input type='text' placeholder="Digite seu Email" mask="email" />
        <div className={styles.buttons}>
            <Button value="Confirmar →" />
            <Button value="Voltar ←" />
        </div>
      </form>
    </div >
  )
}