//Images
import logo from '../../assets/logo.png'
import menuHamburguer from '../../assets/menuHamburguer.svg'
import carrinhoComprasIcon from '../../assets/carrinhoCompras.svg'
import listaDesejosIcon from '../../assets/listaDesejos.svg'
import { LoginIcon } from '../../components/LoginIcon'
//CSS
import styles from './styles.module.css'

//React Libraries
import { useState } from 'react'

//Components
import { MobileMenu } from '../../components/MobileMenu'
import { CarrinhoCompras } from '../../components/CarrinhoCompras'
import { Title } from '../../components/Title'
import { ListaDesejos } from '../../components/ListaDesejos'
import { Item } from '../../components/Item'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CatalogoItensContext } from '../../Context/CatalogoItensContext'

//Interfaces
import { Iitem } from '../../interfaces/Iitem'
import { CarrinhoComprasContext } from '../../Context/CarrinhoComprasContext'


export const ItemsCatalogScreen = () => {


    const [menuVisible, setMenuVisible] = useState(false)
    const [carrinhoComprasVisible, setCarrinhoComprasVisible] = useState(false)
    const [listaDesejosVisible, setListaDesejosVisible] = useState(false)
    const [itensExibidos, setItensExibidos] = useState('Produtos')
    const { itens } = useContext(CatalogoItensContext)

    const { carrinhoCompras } = useContext(CarrinhoComprasContext)

    return (
        <div className={styles.container}>
            <header>
                <img className={styles.logo} src={logo} alt="Logo" />
                <MobileMenu visible={menuVisible} setVisible={setMenuVisible} />
                <CarrinhoCompras visible={carrinhoComprasVisible} setVisible={setCarrinhoComprasVisible} />
                <ListaDesejos visible={listaDesejosVisible} setVisible={setListaDesejosVisible} />
                <nav>
                    <div className={styles.desktopMenu}>
                        <a className={styles.filter} onClick={() => setItensExibidos('Produtos')}>Produtos</a>
                        <a className={styles.filter} onClick={() => setItensExibidos('Serviços')}>Serviços</a>
                        <Link color='gray' to={'/minha_conta_usuario'}>Minha Conta</Link>
                        <Link color='gray' to={'/'}>Sair</Link>

                    </div>
                    <LoginIcon fatherClass={`${styles.mobileMenu}`} image={menuHamburguer} alt='Menu' onClick={() => setMenuVisible(!menuVisible)} />
                    <div className={styles.carrinhoContainer}>
                        {carrinhoCompras.length > 0 &&
                            <div className={styles.counter} onClick={() => setCarrinhoComprasVisible(!carrinhoComprasVisible)}>
                                <span className={styles.counterText}>{carrinhoCompras.length}X</span>
                            </div>
                        }
                        <LoginIcon fatherClass={`${styles.desktopIcon}`} image={carrinhoComprasIcon} alt='Carrinho de Compras' onClick={() => setCarrinhoComprasVisible(!carrinhoComprasVisible)} />
                    </div>
                    <LoginIcon fatherClass={`${styles.desktopIcon}`} image={listaDesejosIcon} alt='Lista de Desejos' onClick={() => setListaDesejosVisible(!listaDesejosVisible)} />
                </nav>
            </header>
            <main>
                <Title value={`Catalogo de ${itensExibidos}`} />
                <div className={styles.itens}>
                    {itensExibidos === 'Produtos' ?
                        itens.filter(item => item.categoria === 'produto').map((item: Iitem) => (
                            <Item item={item} key={item.id} image={item.imagem} alt={item.nome} nome={item.nome} preco={item.preco} />
                        ))
                        :
                        itens.filter(item => item.categoria === 'servico').map((item: Iitem) => (
                            <Item item={item} key={item.id} image={item.imagem} alt={item.nome} nome={item.nome} preco={item.preco} />
                        ))
                    }
                </div>
            </main>
        </div>
    )
}