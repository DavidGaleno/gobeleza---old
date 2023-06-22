import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import { useContext, useState } from 'react'
import { AvaliacaoContext } from '../../Context/AvaliacaoContext'
import { UsuariosContext } from '../../Context/UsuariosContext'
import { Iitem } from '../../interfaces/Iitem'
import { IAvaliacao } from '../../interfaces/IAvaliacao'
interface Props {
    item: Iitem
}
export const StarEvaluate = ({ item }: Props): JSX.Element => {
    const { loggedAccount } = useContext(UsuariosContext)
    const { avaliacoes, setAvaliacoes } = useContext(AvaliacaoContext)

    const stars: JSX.Element[] = []
    const [hover, setHover] = useState<number>(0)
    const [changeHover, setChangeHover] = useState<boolean>(true)
    const [avaliacao, setAvaliacao] = useState({} as IAvaliacao)

    for (let i = 1; i <= 5; i++) {
        stars.push(hover < i ?
            <FontAwesomeIcon onMouseOver={() => {
                if (changeHover) setHover(i)
            }} className={styles.star} icon={faStarRegular} style={{ color: "goldenrod" }
            } onClick={() => {
                if (changeHover === false) {
                    setChangeHover(true)
                    setHover(0)
                }
                else {
                    setChangeHover(false)
                    setHover(i)
                }
                const pastEvaluation = avaliacoes.find(avaliacao => avaliacao.userId === loggedAccount.id && item.id === avaliacao.itemId)
                if (pastEvaluation) {
                    const newAvaliacoes = [...avaliacoes]
                    newAvaliacoes.splice(avaliacoes.indexOf(pastEvaluation), 1)
                    setAvaliacoes(newAvaliacoes)
                    setAvaliacao({} as IAvaliacao)
                }
                if (avaliacao.userId) {
                    const avaliacaoCadastrada = avaliacoes.find(avaliacaoAtual => {
                        return avaliacaoAtual.userId === avaliacao.userId && avaliacaoAtual.itemId === avaliacao.itemId
                    })
                    if (avaliacaoCadastrada) {
                        const newAvaliacoes = [...avaliacoes]
                        newAvaliacoes.splice(avaliacoes.indexOf(avaliacaoCadastrada), 1)
                        setAvaliacoes(newAvaliacoes)
                        setAvaliacao({} as IAvaliacao)

                    }
                }
                else {
                    const novaAvaliacao = {
                        userId: loggedAccount.id,
                        itemId: item!.id,
                        avaliacao: changeHover ? i : 0
                    }
                    setAvaliacao(novaAvaliacao)
                    setAvaliacoes(prevAvaliacoes => [...prevAvaliacoes, novaAvaliacao])
                }

            }
            } />
            :
            <FontAwesomeIcon onMouseOut={() => {
                if (changeHover) setHover(0)
            }} onMouseOver={() => {
                if (changeHover) setHover(i)
            }} onClick={() => {
                if (changeHover === false) {
                    setChangeHover(true)
                    setHover(0)
                }
                else {
                    setChangeHover(false)
                    setHover(i)
                }
                const pastEvaluation = avaliacoes.find(avaliacao => avaliacao.userId === loggedAccount.id && item.id === avaliacao.itemId)
                if (pastEvaluation) {
                    const newAvaliacoes = [...avaliacoes]
                    newAvaliacoes.splice(avaliacoes.indexOf(pastEvaluation), 1)
                    setAvaliacoes(newAvaliacoes)
                    setAvaliacao({} as IAvaliacao)
                }
                if (avaliacao.userId) {
                    const avaliacaoCadastrada = avaliacoes.find(avaliacaoAtual => {
                        return avaliacaoAtual.userId === avaliacao.userId && avaliacaoAtual.itemId === avaliacao.itemId
                    })
                    if (avaliacaoCadastrada) {
                        const newAvaliacoes = [...avaliacoes]
                        newAvaliacoes.splice(avaliacoes.indexOf(avaliacaoCadastrada), 1)
                        setAvaliacoes(newAvaliacoes)
                        setAvaliacao({} as IAvaliacao)

                    }
                }
                else {
                    const novaAvaliacao = {
                        userId: loggedAccount.id,
                        itemId: item!.id,
                        avaliacao: changeHover ? i : 0 
                    }
                    setAvaliacao(novaAvaliacao)
                    setAvaliacoes(prevAvaliacoes => [...prevAvaliacoes, novaAvaliacao])
                }

            }
            } className={styles.star} icon={faStarSolid} style={{ color: "goldenrod" }} />)

    }
    return (
        <div className={styles.container}>
            <div className={styles.stars}>
                {
                    stars.map(star => star)
                }
            </div>
        </div>
    )
}