import { Link } from 'react-router-dom'
import styles from './styles.module.css'
interface Props {
    value: string
    path: string
}
export const SubText = ({ value, path }: Props) => {
    return (
        <div className={styles.subText}>
            <Link to={path}>{value}</Link>
        </div>
    )
}