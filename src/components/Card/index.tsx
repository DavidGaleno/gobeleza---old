import styles from './styles.module.css'
interface Props {
    label: string
    value: string
}
export const Card = ({ label, value }: Props) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.label}>{label}</h2>
            <h3 className={styles.value}>{value}</h3>
        </div>
    )
}