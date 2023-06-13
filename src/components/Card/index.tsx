import styles from './styles.module.css'
interface Props {
    label: string
    value: string | number
    fatherClass?: string
}
export const Card = ({ label, value, fatherClass }: Props) => {
    return (
        <div className={`${styles.card} ${fatherClass}`}>
            <h2 className={styles.label}>{label}</h2>
            <h3 className={styles.value}>{value}</h3>
        </div>
    )
}