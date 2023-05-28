//Images
import logo from '../../assets/logo.png'
import menuHamburguer from '../../assets/menuHamburguer.svg'
import carrinhoCompras from '../../assets/carrinhoCompras.svg'
import listaDesejos from '../../assets/listaDesejos.svg'
import { LoginIcon } from '../../components/LoginIcon'
import corEUnha from '../../assets/cor&unha.svg'
import fulanetto from '../../assets/fulanetto.svg'
//CSS
import styles from './styles.module.css'

//React Libraries
import { useState } from 'react'

import { MobileMenu } from '../../components/MobileMenu'
import { CarrinhoCompras } from '../../components/CarrinhoCompras'
import { Title } from '../../components/Title'
import { ListaDesejos } from '../../components/ListaDesejos'
import { Item } from '../../components/Item'
import { Saloon } from '../../components/Saloon'


export const SaloonCatalogScreen = () => {
    console.log(window.outerWidth)
    const [menuVisible, setMenuVisible] = useState(false)
    const [carrinhoComprasVisible, setCarrinhoComprasVisible] = useState(false)
    const [listaDesejosVisible, setListaDesejosVisible] = useState(false)
    return (
        <div className={styles.container}>
            <header>
                <img className={styles.logo} src={logo} alt="Logo" />
                <MobileMenu visible={menuVisible} setVisible={setMenuVisible} />
                <CarrinhoCompras visible={carrinhoComprasVisible} setVisible={setCarrinhoComprasVisible} />
                <ListaDesejos visible={listaDesejosVisible} setVisible={setListaDesejosVisible} />
                <nav>
                    <div className={styles.desktopMenu}>
                        <a href="#">Produtos</a>
                        <a href="#">Serviços</a>
                        <a href="#">Minha Conta</a>
                        <a href="#">Sair</a>
                    </div>
                    <LoginIcon fatherClass={`${styles.mobileMenu}`} image={menuHamburguer} alt='Menu' onClick={() => setMenuVisible(!menuVisible)} />
                    <LoginIcon fatherClass={`${styles.desktopIcon}`} image={carrinhoCompras} alt='Carrinho de Compras' onClick={() => setCarrinhoComprasVisible(!carrinhoComprasVisible)} />
                    <LoginIcon fatherClass={`${styles.desktopIcon}`} image={listaDesejos} alt='Lista de Desejos' onClick={() => setListaDesejosVisible(!listaDesejosVisible)} />
                </nav>
            </header>
            <main>
                <Title value="Salões" />
                <div className={styles.itens}>
                    <Saloon image={corEUnha} alt={'Cor&Unha'} nome={'Cor&Unha'} />
                    <Saloon image={fulanetto} alt={'Fulanetto'} nome={'Fulanetto'} />
                    
                </div>
            </main>
        </div>
    )
}