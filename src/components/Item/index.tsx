import { useContext, useState } from "react"
import { Iitem } from "../../interfaces/Iitem"
import { ActionButton } from "../ActionButton"
import { DesireListButton } from "../DesireListButton"
import styles from './styles.module.css'
import { CarrinhoComprasContext } from "../../Context/CarrinhoComprasContext"
import { CatalogoItensContext } from "../../Context/CatalogoItensContext"
import { DataHorarioAgendamentoScreen } from "../DataHorarioAgendamento"
import { LoginIcon } from "../LoginIcon"
import unavailableSymbol from '../../assets/unavaiableSymbol.png'
import { StarCount } from "../StarCount"
import { AvaliacaoScreen } from "../AvaliacaoScreen"

interface Props {
    item: Iitem
    image: string
    alt: string
    nome: string
    preco: number
}

export const Item = ({ item, image, alt, nome, preco }: Props) => {

    const { itens, setItens } = useContext(CatalogoItensContext)
    const { valorTotal, setValorTotal } = useContext(CarrinhoComprasContext)
    const [dataHorarioAgendamentoVisible, setDataHorarioAgendamentoVisible] = useState(false)
    const [avaliacaoScreenVisible, setAvaliacaoScreenVisible] = useState(false)
    return (
        <div className={`${item.categoria === 'produto' && item.quantidadeEstoque! <= 0 && styles.unavailable} ${styles.container}`}>
            {item.dataHorarioAgendamento && <DataHorarioAgendamentoScreen item={item} visible={dataHorarioAgendamentoVisible} setVisible={setDataHorarioAgendamentoVisible} />}
            <img className={styles.image} src={image} alt={alt} />
            <div className={styles.text}>
                <h2>{nome}</h2>
                {item.id % 3 === 0 ? <div className={styles.price}><h3 style={{ textDecoration: 'line-through' }}>R${preco.toString().replace('.', ',')}</h3><h3>R${(preco * 0.8).toFixed(2).toString().replace('.', ',')}</h3></div> : <h3>R${preco.toString().replace('.', ',')}</h3>}

            </div>
            <div className={styles.buttons}>
                <ActionButton type="button" onClick={() => {
                    if (item.dataHorarioAgendamento) {
                        setDataHorarioAgendamentoVisible(!dataHorarioAgendamentoVisible)
                    }
                    else {
                        if (item.quantidadeCarrinho >= 0) {
                            const updatedCarrinhoCompras = [...itens]
                            updatedCarrinhoCompras[itens.indexOf(item)].quantidadeCarrinho += 1
                            if (item.categoria === 'produto') updatedCarrinhoCompras[itens.indexOf(item)].quantidadeEstoque! -= 1
                            setItens(updatedCarrinhoCompras)
                        }
                        setValorTotal(valorTotal + item.preco)
                    }
                }} value={item.categoria === 'produto' ? item.quantidadeEstoque! > 0 ? 'Comprar →' : 'Agendar →' : 'Comprar →'} />
                {item.categoria === 'produto' ? item.quantidadeEstoque! > 0 ? <DesireListButton item={item} /> : <LoginIcon image={unavailableSymbol} alt={'Indisponível'} /> : <DesireListButton item={item} />}
                <AvaliacaoScreen item={item} visible={avaliacaoScreenVisible} setVisible={setAvaliacaoScreenVisible} />
            </div>
            <StarCount item={item} visible={avaliacaoScreenVisible} setVisible={setAvaliacaoScreenVisible} />
        </div>
    )
}