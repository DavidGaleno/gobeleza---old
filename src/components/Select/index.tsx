import { useContext, useEffect, useState } from "react"
import { useFormContext } from 'react-hook-form'
import styles from './styles.module.css'
import { CatalogoItensContext } from "../../Context/CatalogoItensContext"
interface Props {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    label: string
    options: string[]
    error?: string
    registerName: string
    fatherClass?: string
    value: string
}

export const Select = ({ onChange, label, options, registerName, fatherClass, error, value }: Props) => {
    const { itens } = useContext(CatalogoItensContext)
    const [clickedButHasNoValue, setClickedButHasNoValue] = useState(false)
    const [selectHasValue, setSelectHasValue] = useState(value ? true : false)
    const [inputValue, setInputValue] = useState(value)
    const { register } = useFormContext()

    useEffect(() => {
        setInputValue('')
    }, [itens])

    return (
        <div className={styles.container}>
            <select value={inputValue ? inputValue : ''} className={`${fatherClass} ${styles.select}`} {...register(registerName, {
                onChange: (e) => {
                    setSelectHasValue(true)
                    setInputValue(e.target.value)
                    { onChange && onChange(e) }
                }
            })} style={{ color: selectHasValue || clickedButHasNoValue ? 'black' : 'gray' }
            } onBlur={() => setClickedButHasNoValue(false)} onClick={() => setClickedButHasNoValue(!clickedButHasNoValue)}  >
                <option value='' hidden>{label}</option>
                {
                    options.map(option => <option key={options.indexOf(option)} value={option} > {option[0].toUpperCase() + option.substring(1)}</option>
                    )
                }
            </select >
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>

    )
}