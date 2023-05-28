import styles from './styles.module.css'
interface Props {
    label: string
    fatherClass?: string
}
export const File = ({ label, fatherClass }: Props) => {
    return (
        <div className={styles.container}>
            <label htmlFor="saloonImage">{label}</label>
            <input id='saloonImage' type='file' className={`${styles.input} ${fatherClass}`} />
        </div >

    )
}