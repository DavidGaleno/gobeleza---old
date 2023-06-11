import styles from './styles.module.css'
import { LoginIcon } from '../LoginIcon'
import { Title } from '../Title'
import { Item } from '../Item'
import listaDesejosIcon from '../../assets/listaDesejos.svg'
import { useContext } from 'react'
import { ListaDesejosContext } from '../../Context/ListaDesejosContext'
import { Iitem } from '../../interfaces/Iitem'
interface Props {
    visible: boolean
    setVisible: (visible: boolean) => void
}
export const ListaDesejos = ({ visible, setVisible }: Props) => {
    const { listaDesejos } = useContext(ListaDesejosContext)
    return (
        <>
            <div className={`${styles.fade} ${!visible ? styles.hide : ''}`}></div>
            <div className={`${styles.container} ${visible ? styles.visible : styles.invisible}`}>
                <LoginIcon onClick={() => setVisible(!visible)} fatherClass={styles.icon} image={listaDesejosIcon} alt='CarrinhoCompras' />
                <Title value='Lista de Desejos' />
                <div className={styles.itens}>
                    {listaDesejos.length === 0 && <Title value='Sua Lista de Desejos está vazia' />
                    }
                    {listaDesejos.map((item: Iitem) => (
                        <Item item={item} image={item.imagem} alt={item.nome} nome={item.nome} preco={item.preco} />
                    ))}

                </div>
            </div>
        </>
    )
}