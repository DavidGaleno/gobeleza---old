import { LoginIcon } from '../LoginIcon'
import carrinhoComprasIcon from './../../assets/carrinhoCompras.svg'
import styles from './styles.module.css'
import { ItemCarrinhoCompras } from '../ItemCarrinhoCompras'
import { ActionButton } from '../ActionButton'
import { Title } from '../Title'
import { useContext, useEffect } from 'react'
import { CarrinhoComprasContext } from '../../Context/CarrinhoComprasContext'
import { CatalogoItensContext } from '../../Context/CatalogoItensContext'
import { Iitem } from '../../interfaces/Iitem'
interface Props {
    visible: boolean
    setVisible: (visible: boolean) => void
}
export const CarrinhoCompras = ({ visible, setVisible }: Props) => {
    const { itens } = useContext(CatalogoItensContext)
    const { carrinhoCompras, setCarrinhoCompras, valorTotal } = useContext(CarrinhoComprasContext)

    useEffect(() => {
        setCarrinhoCompras(itens.filter((item: Iitem) => item.quantidadeCarrinho > 0))
    }, [itens, setCarrinhoCompras])

    return (
        <>
            <div className={`${styles.fade} ${!visible ? styles.hide : ''}`}></div>
            <div className={`${styles.container} ${visible ? styles.visible : styles.invisible}`}>
                <LoginIcon onClick={() => setVisible(!visible)} fatherClass={styles.icon} image={carrinhoComprasIcon} alt='CarrinhoCompras' />
                <Title value='Carrinho de Compras' />
                <div className={styles.info}>
                    <div className={styles.itens}>
                        {carrinhoCompras.map((item: Iitem) => (
                            <ItemCarrinhoCompras key={item.id} item={item} image={item.imagem} alt={item.nome} nome={item.nome} preco={item.preco} />
                        ))}
                    </div>
                    {carrinhoCompras.length > 0 ?
                        <>
                            <div className={styles.valor}>
                                <span>Valor Total:</span>
                                <span>R${valorTotal.toFixed(2).toString().replace('.', ',')}</span>
                            </div>
                            <div className={styles.button}>
                                <ActionButton type="submit" value="Finalizar Pedido →" path="/pagamento_opcoes" />
                            </div>
                        </>
                        :
                        <Title value='Seu carrinho de compras está vazio' />
                    }
                </div>

            </div>
        </>
    )
}