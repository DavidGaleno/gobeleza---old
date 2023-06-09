import { ICadastroPessoaFisica } from '../../interfaces/ICadastroFisica'
import styles from './styles.module.css'
interface Props {
    type: string
    placeholder: string
    mask?: string
    fatherClass?: string
    register?: UseFormRegister<ICadastroPessoaFisica> | undefined
    registerName?: "email" | "cpf" | "telefone" | "sexo" | "endereco" | "complemento" | "nome" | "numero" | "password" | "passwordMatch" | `techs.${number}.title` | `techs.${number}.knowledge` | undefined
    error?: string
}
import { UseFormRegister } from 'react-hook-form'

export const Input = ({ type, placeholder, mask, fatherClass, register, registerName, error }: Props) => {

    const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const onlyNumbersPhone = e.target.value.replace(/\D/g, '');
        if (!onlyNumbersPhone.length) return e.target.value = ''
        else if (onlyNumbersPhone.length < 3) return e.target.value = `(${onlyNumbersPhone.slice(0)}`
        else if (onlyNumbersPhone.length < 4) return e.target.value = `(${onlyNumbersPhone.slice(0, 2)}) ${onlyNumbersPhone.slice(2)}`
        else if (onlyNumbersPhone.length < 8) return e.target.value = `(${onlyNumbersPhone.slice(0, 2)}) ${onlyNumbersPhone.slice(2, 3)} ${onlyNumbersPhone.slice(3)}`
        else return e.target.value = `(${onlyNumbersPhone.slice(0, 2)}) ${onlyNumbersPhone.slice(2, 3)} ${onlyNumbersPhone.slice(3, 7)}-${onlyNumbersPhone.slice(7, 11)}`

    }

    const formatCPF = (e: React.ChangeEvent<HTMLInputElement>) => {
        const onlyNumbersCPF = e.target.value.replace(/\D/g, '');
        if (!onlyNumbersCPF.length) return e.target.value = ''
        else if (onlyNumbersCPF.length < 4) return e.target.value = onlyNumbersCPF.slice(0, 3)
        else if (onlyNumbersCPF.length < 7) return e.target.value = `${onlyNumbersCPF.slice(0, 3)}.${onlyNumbersCPF.slice(3)}`
        else if (onlyNumbersCPF.length < 10) return e.target.value = `${onlyNumbersCPF.slice(0, 3)}.${onlyNumbersCPF.slice(3, 6)}.${onlyNumbersCPF.slice(6)}`
        else return e.target.value = `${onlyNumbersCPF.slice(0, 3)}.${onlyNumbersCPF.slice(3, 6)}.${onlyNumbersCPF.slice(6, 9)}-${onlyNumbersCPF.slice(9, 11)}`

    }
    const checkMask: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (mask === "phoneNumber") formatPhoneNumber(e)
        else if (mask === "cpf") formatCPF(e)
    }



    return (
        <div className={styles.container}>
            <input {...(register as UseFormRegister<ICadastroPessoaFisica> | undefined)?.(registerName as "email" | "cpf" | "telefone" | "sexo" | "endereco" | "complemento" | "nome" | "numero" | "password" | "passwordMatch" | `techs.${number}.title` | `techs.${number}.knowledge`)} type={type} className={`${styles.input} ${fatherClass}`} placeholder={placeholder} onChange={(e) => checkMask(e)} />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    )
}
