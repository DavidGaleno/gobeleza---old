import { useState } from "react"
import { UseFormRegister } from 'react-hook-form'
import { ICadastroUsuario } from "../../interfaces/ICadastroUsuario"
interface Props {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    label: string
    options: string[]
    register: UseFormRegister<ICadastroUsuario>
    registerName: "email" | "cpf" | "telefone" | "sexo" | "endereco" | "complemento" | "nome" | "numero" | "password" | "passwordMatch"
}

export const Select = ({ onChange, label, options, register, registerName }: Props) => {
    const [clickedButHasNoValue, setClickedButHasNoValue] = useState(false)
    const [selectHasValue, setSelectHasValue] = useState(false)
    return (
        <select {...register(registerName, {
            onChange: (e) => {
                setSelectHasValue(true)
                { onChange && onChange(e) }
            }
        })} style={{ color: selectHasValue || clickedButHasNoValue ? 'black' : 'gray' }
        } onBlur={() => setClickedButHasNoValue(false)} onClick={() => setClickedButHasNoValue(!clickedButHasNoValue)}  >
            <option value='' hidden>{label}</option>
            <option value={options[0]}>Masculino</option>
            <option value={options[1]}>Feminino</option>
            {/* {
                options.map(option => <option key={options.indexOf(option)} value={"masculino"} > {option[0].toUpperCase() + option.substring(1)}</option>
                )
            } */}
        </select >
    )
}