import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfStroke, faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import { ActionButton } from '../ActionButton'
import { useContext } from 'react'
import { AvaliacaoContext } from '../../Context/AvaliacaoContext'
import { Iitem } from '../../interfaces/Iitem'
import { IAvaliacao } from '../../interfaces/IAvaliacao'
interface Props {
    visible: boolean
    setVisible: (visible: boolean) => void
    item: Iitem
}
export const StarCount = ({ visible, setVisible, item }: Props): JSX.Element => {
    const { avaliacoes } = useContext(AvaliacaoContext)
    const stars: JSX.Element[] = []
    const avaliacoesItem = avaliacoes.filter(avaliacaoCadastrada => avaliacaoCadastrada.itemId === item.id)
    const avaliacaoMedia = avaliacoesItem.reduce((a: number, b: IAvaliacao) => a + b.avaliacao, 0) / avaliacoesItem.length
    for (let i = 1; i <= 5; i++) {
        if (avaliacaoMedia >= i) stars.push(<FontAwesomeIcon className={styles.star} icon={faStarSolid} style={{ color: "goldenrod" }} />)
        else if (!Number.isInteger(avaliacaoMedia) && i - 1 < avaliacaoMedia) stars.push(<FontAwesomeIcon className={styles.star} icon={faStarHalfStroke} style={{ color: "goldenrod" }} />)
        else stars.push(<FontAwesomeIcon className={styles.star} icon={faStarRegular} style={{ color: "goldenrod" }} />)
    }

    return (
        <div className={styles.container}>
            <div className={styles.stars}>
                {
                    stars.map(star => star)
                }
            </div>
            <ActionButton type="button" value="Avaliar →" onClick={() => setVisible(!visible)} />
        </div>
    )
}