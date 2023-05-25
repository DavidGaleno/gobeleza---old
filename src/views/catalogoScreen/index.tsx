//Images
import logo from '../../assets/logo.png'
import menuHamburguer from '../../assets/menuHamburguer.svg'
import carrinhoCompras from '../../assets/carrinhoCompras.svg'
import listaDesejos from '../../assets/listaDesejos.svg'
import { LoginIcon } from '../../components/LoginIcon'
import batom from '../../assets/batom.png'
import maquiagem from '../../assets/maquiagem.png'
//CSS
import styles from './styles.module.css'

//React Libraries
import { useState } from 'react'
import { Item } from '../../components/Item'


export const CatalogoScreen = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    const [carrinhoComprasVisible, setCarrinhoComprasVisible] = useState(false)
    const [listaDesejosVisible, setlistaDesejosVisible] = useState(false)
    return (
        <div className={styles.container}>
            <header>
                <img className={styles.logo} src={logo} alt="Logo" />
                <nav>
                    <div className={styles.desktopMenu}>
                        <a href="#">Produtos</a>
                        <a href="#">Serviços</a>
                        <a href="#">Minha Conta</a>
                    </div>
                    <LoginIcon fatherClass={styles.mobileMenu} image={menuHamburguer} alt='Menu' />
                    <LoginIcon image={carrinhoCompras} alt='Carrinho de Compras' />
                    <LoginIcon image={listaDesejos} alt='Lista de Desejos' />
                </nav>
            </header>
            <main>
                <h1>Catálogo de Produtos</h1>
                <div className={styles.itens}>
                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />
                    <Item image={maquiagem} alt="Maquiagem" nome="Maquiagem" preco={29.99} />
                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />
                    <Item image={maquiagem} alt="Maquiagem" nome="Maquiagem" preco={29.99} />
                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />
                    <Item image={maquiagem} alt="Maquiagem" nome="Maquiagem" preco={29.99} />
                    <Item image={batom} alt="Batom" nome="Batom" preco={9.99} />
                    <Item image={maquiagem} alt="Maquiagem" nome="Maquiagem" preco={29.99} />
                </div>
            </main>
        </div>
    )
}