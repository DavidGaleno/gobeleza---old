
import { useContext } from 'react'
import { CarrinhoComprasContext } from '../../Context/CarrinhoComprasContext'
import { Iitem } from '../../interfaces/Iitem'
import styles from './styles.module.css'
import { CatalogoItensContext } from '../../Context/CatalogoItensContext'

interface Props {
    item: Iitem
    image: string
    alt: string
    nome: string
    preco: number

}
export const ItemCarrinhoCompras = ({ item, image, alt, nome, preco }: Props) => {
    const { itens, setItens } = useContext(CatalogoItensContext)
    const { valorTotal, setValorTotal } = useContext(CarrinhoComprasContext)
    return (
        <div className={`${styles.container}`}>
            <img className="image" src={image} alt={alt} />
            <div className={styles.text}>
                <h2>{nome}</h2>
                <h3>R${preco.toFixed(2).toString().replace('.', ',')}{item.quantidadeCarrinho > 1 && `(${item.quantidadeCarrinho}X)`}</h3>
            </div>
            <div className={styles.exclude}><span onClick={() => {
                if (item.quantidadeCarrinho > 0) {
                    const updatedItens = [...itens]
                    updatedItens[itens.indexOf(item)].quantidadeCarrinho -= 1
                    setItens(updatedItens)
                }
                setValorTotal(valorTotal - item.preco)
            }}>X</span></div>

        </div>
    )
}