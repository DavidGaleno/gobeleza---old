import styles from './styles.module.css'
interface Props {
    type: string
    placeholder: string
}
export const Input = ({ type, placeholder }: Props) => {
    return (
        <input type={type} className={styles.input} placeholder={placeholder} />
    )
}