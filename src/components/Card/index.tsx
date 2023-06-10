import styles from './styles.module.css'
interface Props {
    label: string
    value: string
}
export const Card = ({ label, value }: Props) => {
    return (
        <div className={styles.card}>
            <h2>{label}</h2>
            <h3>{value}</h3>
        </div>
    )
}