//Images
import logo from '../../assets/logo.png'
import menuHamburguer from '../../assets/menuHamburguer.svg'
import carrinhoCompras from '../../assets/carrinhoCompras.svg'
import listaDesejos from '../../assets/listaDesejos.svg'
import { LoginIcon } from '../../components/LoginIcon'
//CSS
import styles from './styles.module.css'

//React Libraries
import { useState } from 'react'

import { MobileMenu } from '../../components/MobileMenu'
import { CarrinhoCompras } from '../../components/CarrinhoCompras'
import { Title } from '../../components/Title'
import { ListaDesejos } from '../../components/ListaDesejos'
import { Item } from '../../components/Item'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CatalogoItensContext } from '../../Context/CatalogoItensContext'
import { IProduto } from '../../interfaces/IProduto'
import { IServico } from '../../interfaces/IServico'


export const ItemsCatalogScreen = () => {

    const [menuVisible, setMenuVisible] = useState(false)
    const [carrinhoComprasVisible, setCarrinhoComprasVisible] = useState(false)
    const [listaDesejosVisible, setListaDesejosVisible] = useState(false)
    const [itensExibidos, setItensExibidos] = useState('Produtos')
    const { produtos, servicos } = useContext(CatalogoItensContext)

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
                    <LoginIcon fatherClass={`${styles.desktopIcon}`} image={carrinhoCompras} alt='Carrinho de Compras' onClick={() => setCarrinhoComprasVisible(!carrinhoComprasVisible)} />
                    <LoginIcon fatherClass={`${styles.desktopIcon}`} image={listaDesejos} alt='Lista de Desejos' onClick={() => setListaDesejosVisible(!listaDesejosVisible)} />
                </nav>
            </header>
            <main>
                <Title value={`Catalogo de ${itensExibidos}`} />
                <div className={styles.itens}>
                    {itensExibidos === 'Produtos' ?
                        produtos.map((produto: IProduto) => (
                            <Item key={produto.id} image={produto.imagem} alt={produto.nome} nome={produto.nome} preco={produto.preco} />
                        ))
                        :
                        servicos.map((servico: IServico) => (
                            <Item key={servico.id} image={servico.imagem} alt={servico.nome} nome={servico.nome} preco={servico.preco} />
                        ))
                    }
                </div>
            </main>
        </div>
    )
}