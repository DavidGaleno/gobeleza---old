import styles from './styles.module.css'
interface Props {
    label: string
    fatherClass?: string
    error?: string
    registerName: string
}
import { useFormContext } from 'react-hook-form'
export const File = ({ label, fatherClass, error, registerName }: Props) => {
    const { register } = useFormContext()
    return (
        <div className={styles.container}>
            <label htmlFor="saloonImage">{label}</label>
            <input {...register(registerName)} id='saloonImage' type='file' className={`${styles.input} ${fatherClass}`} />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div >

    )
}