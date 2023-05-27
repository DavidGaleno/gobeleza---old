import styles from './styles.module.css'
interface Props {
    value: string
    fatherClass?:string
}
export const ActionButton = ({ value,fatherClass }: Props) => {
    return (
        <button className={`${styles.button} ${fatherClass}`}>
            {value}
        </button>
    )
}