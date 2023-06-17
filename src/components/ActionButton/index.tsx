import { Link } from 'react-router-dom'
import styles from './styles.module.css'
interface Props {
    value: string
    fatherClass?: string
    display?: boolean
    path?: string
    onClick?: () => void
    type: "button" | "reset" | "submit" 
}
export const ActionButton = ({ value, fatherClass, display, onClick, path, type }: Props) => {
    return (
        <button type={type} onClick={onClick} style={{ display: display === false ? 'none' : 'block' }} className={`${styles.button} ${fatherClass}`}>
            {path ? <Link className={`${styles.link} ${fatherClass}`} color='white' to={path}>{value}</Link> : value}
        </button>
    )
}