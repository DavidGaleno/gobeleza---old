interface Props {
    value: string
}
import styles from './styles.module.css'
export const Title = ({ value }: Props) => {
    return (
        <h1 className={styles.title}>{value}</h1>
    )
}