import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfStroke, faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import { ActionButton } from '../ActionButton'
interface Props {
    avaliacaoMedia: number
}
export const StarCount = ({ avaliacaoMedia }: Props): JSX.Element => {
    const stars: JSX.Element[] = []
    for (let i = 1; i <= 5; i++) {
        if (avaliacaoMedia > i) stars.push(<FontAwesomeIcon className={styles.star} icon={faStarSolid} style={{ color: "goldenrod" }} />)
        else if (!Number.isInteger(avaliacaoMedia) && i - 1 < avaliacaoMedia) stars.push(<FontAwesomeIcon className={styles.star} icon={faStarHalfStroke} style={{ color: "goldenrod" }} />)
        else stars.push(<FontAwesomeIcon className={styles.star} icon={faStarRegular} style={{ color: "goldenrod" }} />)

    }
    return (
        <div className={styles.container}>
            <div className={styles.stars}>{stars.map(star => star)}</div>
            <ActionButton value={'Avaliar →'} type={'button'} />
        </div>
    )
}