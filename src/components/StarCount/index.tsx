import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfStroke, faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import { ActionButton } from '../ActionButton'
import { useState } from 'react'
interface Props {
    avaliacaoMedia?: number
    visible: boolean
    setVisible: (visible: boolean) => void
}
export const StarCount = ({ avaliacaoMedia, visible, setVisible }: Props): JSX.Element => {
    const stars: JSX.Element[] = []
    const [hover, setHover] = useState<number>(0)
    const [changeHover, setChangeHover] = useState<boolean>(true)
    if (avaliacaoMedia) {
        for (let i = 1; i <= 5; i++) {
            if (avaliacaoMedia > i) stars.push(<FontAwesomeIcon className={styles.star} icon={faStarSolid} style={{ color: "goldenrod" }} />)
            else if (!Number.isInteger(avaliacaoMedia) && i - 1 < avaliacaoMedia) stars.push(<FontAwesomeIcon className={styles.star} icon={faStarHalfStroke} style={{ color: "goldenrod" }} />)
            else stars.push(<FontAwesomeIcon className={styles.star} icon={faStarRegular} style={{ color: "goldenrod" }} />)
        }
    }
    else {
        for (let i = 1; i <= 5; i++) {
            stars.push(hover < i ?
                <FontAwesomeIcon onMouseOut={() => {
                    if (changeHover) setHover(0)
                }} onMouseOver={() => {
                    if (changeHover) setHover(i)
                }} onClick={() => setChangeHover(!changeHover)} className={styles.star} icon={faStarRegular} style={{ color: "goldenrod" }} />
                :
                <FontAwesomeIcon onMouseOut={() => {
                    if (changeHover) setHover(0)
                }} onMouseOver={() => {
                    if (changeHover) setHover(i)
                }} onClick={() => setChangeHover(!changeHover)} className={styles.star} icon={faStarSolid} style={{ color: "goldenrod" }} />)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.stars}>
                {
                    stars.map(star => star)
                }
            </div>
            {avaliacaoMedia && <ActionButton type="button" value="Avaliar →" onClick={() => setVisible(!visible)} />}
        </div>
    )
}