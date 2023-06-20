
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
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={alt} />
            <div className={styles.text}>
                <h2>{nome}</h2>
                <h3>R${preco.toFixed(2).toString().replace('.', ',')}{item.quantidadeCarrinho > 1 && `(${item.quantidadeCarrinho}X)`}</h3>
                <div className={styles.agendamentos}>
                    {item.dataHorarioEscolhidos && item.dataHorarioEscolhidos.map(dataHorario => <h3 key={dataHorario}>{`${dataHorario}`}</h3>)}
                </div>
            </div>
            <div className={styles.exclude}><span onClick={() => {
                if (item.quantidadeCarrinho > 0) {
                    const updatedItens = [...itens]
                    updatedItens[itens.indexOf(item)].quantidadeCarrinho -= 1
                    if (item.categoria === 'produto') updatedItens[itens.indexOf(item)].quantidadeEstoque! += 1
                    const dataHorarioRemovido = updatedItens[itens.indexOf(item)].dataHorarioEscolhidos?.pop()
                    updatedItens[itens.indexOf(item)].dataHorarioAgendamento?.push(dataHorarioRemovido!)
                    updatedItens[itens.indexOf(item)].dataHorarioAgendamento?.sort()
                    setItens(updatedItens)
                }
                setValorTotal(valorTotal - item.preco)
            }}>X</span></div>

        </div>
    )
}