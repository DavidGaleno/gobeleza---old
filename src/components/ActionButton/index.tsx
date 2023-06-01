import { Link } from 'react-router-dom'
import styles from './styles.module.css'
interface Props {
    value: string
    fatherClass?: string
    display?: boolean
    path?: string
    onClick?: () => void
}
export const ActionButton = ({ value, fatherClass, display, onClick, path }: Props) => {
    return (
        <button onClick={onClick} style={{ display: display === false ? 'none' : 'block' }} className={`${styles.button} ${fatherClass}`}>
                       {path ?  <Link className={`${styles.link} ${fatherClass}`} color='white' to={path}>{value}</Link> : value}
        </button>
    )
}