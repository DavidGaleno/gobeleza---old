import styles from './styles.module.css'
interface Props {
    value: string
}
export const ActionButton = ({ value }: Props) => {
    return (
        <button className={styles.button}>
            {value}
        </button>
    )
}