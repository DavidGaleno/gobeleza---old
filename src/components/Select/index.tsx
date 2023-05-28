import { useState } from "react"
interface Props {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    label: string
    options: string[]
}
export const Select = ({ onChange, label, options }: Props) => {
    const [clickedButHasNoValue, setClickedButHasNoValue] = useState(false)
    const [selectHasValue, setSelectHasValue] = useState(false)

    return (
        <select style={{ color: selectHasValue || clickedButHasNoValue ? 'black' : 'gray' }} onBlur={() => setClickedButHasNoValue(false)} onClick={() => setClickedButHasNoValue(!clickedButHasNoValue)} onChange={(e) => {
            setSelectHasValue(true)
            { onChange && onChange(e) }
        }
        } >
            <option value={''} selected hidden>{label}</option>
            {options.map(option => <option value={option}>{option[0].toUpperCase() + option.substring(1)}</option>
            )}
        </select>
    )
}