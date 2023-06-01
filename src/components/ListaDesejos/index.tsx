import styles from './styles.module.css'
import batom from '../../assets/batom.png'
import { LoginIcon } from '../LoginIcon'
import { Title } from '../Title'
import { Item } from '../Item'
import listaDesejos from '../../assets/listaDesejos.svg'
interface Props {
    visible: boolean
    setVisible: (visible: boolean) => void
}
export const ListaDesejos = ({ visible, setVisible }: Props) => {

    return (
        <>
            <div className={`${styles.fade} ${!visible ? styles.hide : ''}`}></div>
            <div className={`${styles.container} ${visible ? styles.visible : styles.invisible}`}>
                <LoginIcon onClick={() => setVisible(!visible)} fatherClass={styles.icon} image={listaDesejos} alt='CarrinhoCompras' />
                <Title value='Lista de Desejos' />
                <div className={styles.itens}>

                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />
                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />

                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />

                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />

                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />
                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />

                </div>
            </div>
        </>
    )
}