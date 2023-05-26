import { LoginIcon } from '../LoginIcon'
import batom from '../../assets/batom.png'
import carrinhoCompras from './../../assets/carrinhoCompras.svg'
import styles from './styles.module.css'
import { Item } from '../Item'
import { ActionButton } from '../ActionButton'
import { Title } from '../Title'
interface Props {
    visible: boolean
    setVisible: (visible: boolean) => void
}
export const CarrinhoCompras = ({ visible, setVisible }: Props) => {
    return (
        <>
            <div className={`${styles.fade} ${!visible ? styles.hide : ''}`}></div>
            <div className={`${styles.container} ${visible ? styles.visible : styles.invisible}`}>
                <LoginIcon onClick={() => setVisible(!visible)} fatherClass={styles.icon} image={carrinhoCompras} alt='CarrinhoCompras' />
                <Title value='Carrinho de Compras'/>
                <div className={styles.itens}>

                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />
                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />

                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />

                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />

                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />
                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />

                </div>
                <div className={styles.valor}>
                    <span>Valor Total:</span>
                    <span>R$99,99</span>
                </div>
                <div className={styles.button}>
                    <ActionButton value="Finalizar Pedido →" />
                </div>
            </div>
        </>
    )
}