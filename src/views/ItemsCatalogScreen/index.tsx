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
import { Header } from '../../components/Header'


export const ItemsCatalogScreen = () => {


    const [menuVisible, setMenuVisible] = useState(false)
    const [carrinhoComprasVisible, setCarrinhoComprasVisible] = useState(false)
    const [listaDesejosVisible, setListaDesejosVisible] = useState(false)
    const [itensExibidos, setItensExibidos] = useState('Produtos')
    const { itens } = useContext(CatalogoItensContext)

    const { carrinhoCompras } = useContext(CarrinhoComprasContext)

    return (
        <div className={styles.container}>
            <Header setItensExibidos={setItensExibidos} />
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