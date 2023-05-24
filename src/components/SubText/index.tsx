import styles from './styles.module.css'
interface Props {
    value : string
}
export const SubText = ({value}:Props) => {
    return (
        <div className={styles.subText}>
            <a href="#">{value}</a>
        </div>
    )
}