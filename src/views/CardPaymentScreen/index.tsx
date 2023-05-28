//Images
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'


import styles from './styles.module.css'
export const CardPaymentScreen = () => {
  const [clickedButHasNoValue, setClickedButHasNoValue] = useState(false)
  const [selectHasValue, setSelectHasValue] = useState(false)
  const [modalidade, setModalidade] = useState('')
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <form className={styles.form}>
        <Input fatherClass={styles.input} type='text' placeholder="Digite o número do cartão" />
        <Input fatherClass={styles.input} type='text' placeholder="Digite o nome do titular do cartão" />
        <Input fatherClass={styles.input} type='text' placeholder="Digite a data de vencimento do cartão" />
        <Input fatherClass={`${styles.input} ${styles.cvv}`} type='text' placeholder="Digite o CVV" />
        <select style={{ color: selectHasValue || clickedButHasNoValue ? 'black' : 'gray' }} onBlur={() => setClickedButHasNoValue(false)} onClick={() => setClickedButHasNoValue(!clickedButHasNoValue)} onChange={(e) => {
          setSelectHasValue(true)
          setModalidade(e.target.value.toLocaleLowerCase())
        }} name="sexo" id="sexo">
          <option value={modalidade} selected hidden>Selecione a modalidade do cartão</option>
          <option value="Débito">Débito</option>
          <option value="Crédito">Crédito</option>
        </select>
        {modalidade === 'crédito' ?
          <select style={{ color: selectHasValue || clickedButHasNoValue ? 'black' : 'gray' }} onBlur={() => setClickedButHasNoValue(false)} onClick={() => setClickedButHasNoValue(!clickedButHasNoValue)} onChange={() => setSelectHasValue(true)} name="sexo" id="sexo">
            <option value={''} selected hidden>Selecione o número de parcelas</option>
            <option value="1">1X</option>
            <option value="2">2X</option>
            <option value="4">4X</option>
            <option value="6">6X</option>
            <option value="8">8X</option>
            <option value="10">10X</option>
            <option value="12">12X</option>
          </select>
          :
          ''
        }

        <div className={styles.buttons}>
          <ActionButton value="Confirmar →" />
          <ActionButton value="Voltar ←" />
        </div>
      </form>
    </div >
  )
}