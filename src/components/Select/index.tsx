import { useState } from "react"
import { UseFormRegister } from 'react-hook-form'
import { ICadastroPessoaFisica } from "../../interfaces/ICadastroFisica"
import styles from './styles.module.css'
interface Props {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    label: string
    options: string[]
    register?: UseFormRegister<ICadastroPessoaFisica> | undefined
    registerName?: "email" | "cpf" | "telefone" | "sexo" | "endereco" | "complemento" | "nome" | "numero" | "password" | "passwordMatch" | undefined
    fatherClass?: string
}

export const Select = ({ onChange, label, options, register, registerName, fatherClass }: Props) => {
    const [clickedButHasNoValue, setClickedButHasNoValue] = useState(false)
    const [selectHasValue, setSelectHasValue] = useState(false)
    return (
        <select className={`${fatherClass} ${styles.select}`} {...(register as UseFormRegister<ICadastroPessoaFisica> | undefined)?.(registerName as "email" | "cpf" | "telefone" | "sexo" | "endereco" | "complemento" | "nome" | "numero" | "password" | "passwordMatch", {
            onChange: (e) => {
                setSelectHasValue(true)
                { onChange && onChange(e) }
            }
        })} style={{ color: selectHasValue || clickedButHasNoValue ? 'black' : 'gray' }
        } onBlur={() => setClickedButHasNoValue(false)} onClick={() => setClickedButHasNoValue(!clickedButHasNoValue)}  >
            <option value='' hidden>{label}</option>
            {
                options.map(option => <option key={options.indexOf(option)} value={"masculino"} > {option[0].toUpperCase() + option.substring(1)}</option>
                )
            }
        </select >
    )
}