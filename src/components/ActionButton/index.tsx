import styles from './styles.module.css'
interface Props {
    value: string
    fatherClass?: string
    display?: boolean
    onClick?: () => void
}
export const ActionButton = ({ value, fatherClass, display, onClick }: Props) => {
    return (
        <button onClick={onClick} style={{ display: display === false ? 'none' : 'block' }} className={`${styles.button} ${fatherClass}`}>
            {value}
        </button>
    )
}