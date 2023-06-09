import { useState } from "react"
import { useFormContext } from 'react-hook-form'
import styles from './styles.module.css'
interface Props {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    label: string
    options: string[]
    error?: string
    registerName?: "email" | "cpf" | "telefone" | "sexo" | "endereco" | "complemento" | "nome" | "numero" | "password" | "passwordMatch" | undefined
    fatherClass?: string
}

export const Select = ({ onChange, label, options, registerName, fatherClass, error }: Props) => {
    const [clickedButHasNoValue, setClickedButHasNoValue] = useState(false)
    const [selectHasValue, setSelectHasValue] = useState(false)
    const { register } = useFormContext()
    return (
        <div className={styles.container}>
            <select className={`${fatherClass} ${styles.select}`} {...(register)?.(registerName as "email" | "cpf" | "telefone" | "sexo" | "endereco" | "complemento" | "nome" | "numero" | "password" | "passwordMatch", {
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
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>

    )
}