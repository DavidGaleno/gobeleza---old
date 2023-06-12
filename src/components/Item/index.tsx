import { useContext } from "react"
import { Iitem } from "../../interfaces/Iitem"
import { ActionButton } from "../ActionButton"
import { DesireListButton } from "../DesireListButton"

import styles from './styles.module.css'
import { CarrinhoComprasContext } from "../../Context/CarrinhoComprasContext"
import { CatalogoItensContext } from "../../Context/CatalogoItensContext"

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
    return (
        <div className={`${styles.container}`}>
            <img src={image} alt={alt} />
            <div className={styles.text}>
                <h2>{nome}</h2>
                <h3>R${preco.toString().replace('.', ',')}{ }</h3>
            </div>
            <div className={styles.buttons}>
                <ActionButton onClick={() => {
                    if (item.quantidadeCarrinho >= 0) {
                        const updatedCarrinhoCompras = [...itens]
                        updatedCarrinhoCompras[itens.indexOf(item)].quantidadeCarrinho += 1
                        setItens(updatedCarrinhoCompras)
                    }
                    setValorTotal(valorTotal + item.preco)
                }} value="Comprar →" />
                <DesireListButton item={item} />
            </div>

        </div>
    )
}