import { Link } from 'react-router-dom'
import styles from './styles.module.css'
interface Props {
    value : string
}
export const SubText = ({value}:Props) => {
    return (
        <div className={styles.subText}>
            <Link to="/cadastrar_usuario">{value}</Link>
        </div>
    )
}