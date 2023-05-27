import { ActionButton } from "../ActionButton"
import styles from './styles.module.css'
interface Props {
    label: string
    value: string
    changeValue: boolean

}
export const Campo = ({ label, value, changeValue }: Props) => {
    return (
        <div className={styles.container}>
            <span className={styles.label}>{label}:</span>
            <div className={styles.valueGroup}>
                <span className={styles.value}>{value.length <= 18 ? value : `${value.substring(0, 18)}...`}</span>
                {changeValue ? <ActionButton fatherClass={styles.button} value="Alterar →" /> : ''}
            </div>
        </div>
    )
}