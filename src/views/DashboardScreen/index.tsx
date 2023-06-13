import logo from '../../assets/logo.png'
import dashboard from '../../assets/dashboard.png'
import specialPassword from '../../assets/specialPassword.png'
import menuHamburguer from '../../assets/menuHamburguer.svg'
import powerBI from '../../assets/powerBISymbol.png'
import excel from '../../assets/excelSymbol.png'
import styles from './styles.module.css'
import { LoginIcon } from '../../components/LoginIcon'
import { MobileMenu } from '../../components/MobileMenu'
import { useContext, useState } from 'react'
import { Card } from '../../components/Card'
import { UsuariosContext } from '../../Context/UsuariosContext'
import { IitemCompra } from '../../interfaces/IitemCompra'
import { Title } from '../../components/Title'
import { IComprador } from '../../interfaces/IComprador'
import { ICompra } from '../../interfaces/ICompra'
export const DashboardScreen = () => {
    const { compras } = useContext(UsuariosContext)
    const produtosVendidos: IitemCompra[] = []
    compras.forEach(compra => {
        compra.compras.filter(item => item.categoria === "produto").forEach(item => {
            produtosVendidos.push(item)
        })
    })
    let produtoMaisVendido: IitemCompra = {
        nome: '',
        quantidade: 0,
        valor: 0,
        categoria: ''
    }
    produtosVendidos.forEach(item => {
        if (!produtoMaisVendido.quantidade) produtoMaisVendido = item
        produtoMaisVendido = produtoMaisVendido.quantidade > item.quantidade ? produtoMaisVendido : item
    })

    const servicosVendidos: IitemCompra[] = []
    compras.forEach(compra => {
        compra.compras.filter(item => item.categoria === "servico").forEach(item => {
            servicosVendidos.push(item)
        })
    })

    let servicoMaisVendido: IitemCompra = {
        nome: '',
        quantidade: 0,
        valor: 0,
        categoria: ''
    }

    servicosVendidos.forEach(item => {
        if (!servicoMaisVendido.quantidade) servicoMaisVendido = item
        servicoMaisVendido = servicoMaisVendido.quantidade > item.quantidade ? servicoMaisVendido : item
    })

    const compradores: IComprador[] = []

    compras.forEach(compra => {
        let quantidade = 0
        let valor = 0
        compra.compras.forEach(item => {
            quantidade += item.quantidade
            valor += item.valor
        })
        let comprador: IComprador = {
            email: compra.email,
            nome: compra.nome,
            quantidade: quantidade,
            valor: valor
        }
        let compradorJaExiste = false
        compradores.forEach(compradorLista => {
            if (compradorLista.email === comprador.email) {
                compradorJaExiste = true
                compradores[compradores.indexOf(compradorLista)].quantidade = comprador.quantidade
                compradores[compradores.indexOf(compradorLista)].quantidade = comprador.valor
            }
        })
        if (!compradorJaExiste) compradores.push(comprador)

    })
    console.log(compradores)

    compradores.forEach(comprador => {
        compras.forEach((compra: ICompra) => {
            if (comprador["email"] === compra.email) {
                compra.compras.forEach(compra => comprador.quantidade += compra.quantidade)
            }
        })

    })

    let maiorCompradorQuantidade: IComprador = {} as IComprador
    compradores.forEach((comprador: IComprador) => {
        if (maiorCompradorQuantidade.quantidade) {
            maiorCompradorQuantidade = maiorCompradorQuantidade.quantidade > comprador.quantidade ? maiorCompradorQuantidade : comprador
        }
        else maiorCompradorQuantidade = comprador
    })

    let maiorCompradorValor: IComprador = {} as IComprador
    compradores.forEach((comprador: IComprador) => {
        if (maiorCompradorValor.valor) {
            maiorCompradorValor = maiorCompradorValor.valor > comprador.valor ? maiorCompradorValor : comprador
        }
        else maiorCompradorValor = comprador
    })







    const [menuVisible, setMenuVisible] = useState(false)
    const [filtro, setFiltro] = useState('produtos')
    return (
        <div className={styles.container}>
            <header>
                <img className={styles.logo} src={logo} alt="Logo" />
                <MobileMenu visible={menuVisible} setVisible={setMenuVisible} />
                <nav>
                    <div className={styles.desktopMenu}>
                        <a href="#">Produtos</a>
                        <a href="#">Serviços</a>
                        <a href="#">Minha Conta</a>
                        <a href="#">Sair</a>
                    </div>
                    <LoginIcon fatherClass={`${styles.desktopIcon} `} image={dashboard} alt='Carrinho de Compras' />
                    <LoginIcon fatherClass={`${styles.desktopIcon} `} image={specialPassword} alt='Lista de Desejos' />
                    <LoginIcon fatherClass={`${styles.mobileMenu}`} image={menuHamburguer} alt='Menu' onClick={() => setMenuVisible(!menuVisible)} />
                </nav>
            </header>
            <main>
                <div className={styles.filters}>
                    <div className={styles.categories}>
                        <span onClick={() => setFiltro('produtos')} className={`${styles.category} ${styles.filter}`}>Produtos</span>
                        <span onClick={() => setFiltro('servicos')} className={`${styles.category} ${styles.filter}`}>Serviços</span>
                        <span onClick={() => setFiltro('usuarios')} className={`${styles.category} ${styles.filter}`}>Usuários</span>
                    </div>
                </div>
                {filtro === 'produtos' &&
                    <>
                        <Title value='Produto Mais Vendido' />
                        <div className={styles.itemData}>
                            <LoginIcon fatherClass={styles.desktopDashboardIcon} image={powerBI} alt='PowerBI' />
                            <div className={styles.cards}>
                                <div className={styles.cardGroup}>
                                    <Card label='Produto' value={produtoMaisVendido.nome} />
                                    <Card label='Quantidade' value={produtoMaisVendido.quantidade} />
                                </div>
                                <Card fatherClass={styles.card} label='Valor' value={produtoMaisVendido.valor} />
                            </div>
                            <LoginIcon fatherClass={styles.desktopDashboardIcon} image={excel} alt='Excel' />
                            <div className={`${styles.dashboardIcons} ${styles.mobileDashboardIcons}`}>
                                <LoginIcon fatherClass={`${styles.dashboardIcon} `} image={powerBI} alt='PowerBI' />
                                <LoginIcon fatherClass={`${styles.dashboardIcon} `} image={excel} alt='Excel' />
                            </div>
                        </div>
                    </>}
                {filtro === 'servicos' &&
                    <>
                        <Title value='Serviço Mais Vendido' />
                        <div className={styles.itemData}>
                            <LoginIcon fatherClass={styles.desktopDashboardIcon} image={powerBI} alt='PowerBI' />
                            <div className={styles.cards}>
                                <div className={styles.cardGroup}>
                                    <Card label='Serviço' value={servicoMaisVendido.nome} />
                                    <Card label='Quantidade' value={servicoMaisVendido.quantidade} />
                                </div>
                                <Card fatherClass={styles.card} label='Valor' value={servicoMaisVendido.valor} />
                            </div>
                            <LoginIcon fatherClass={styles.desktopDashboardIcon} image={excel} alt='Excel' />
                            <div className={`${styles.dashboardIcons} ${styles.mobileDashboardIcons}`}>
                                <LoginIcon fatherClass={`${styles.dashboardIcon} `} image={powerBI} alt='PowerBI' />
                                <LoginIcon fatherClass={`${styles.dashboardIcon} `} image={excel} alt='Excel' />
                            </div>
                        </div>
                    </>}
                {filtro === 'usuarios' &&
                    <div className={styles.itensCards}>
                        <Title value='Maior Comprador Por Quantidade' />
                        <div className={styles.itemData}>
                            <LoginIcon fatherClass={styles.desktopDashboardIcon} image={powerBI} alt='PowerBI' />
                            <div className={styles.cards}>
                                <div className={styles.cardGroup}>
                                    <Card label='Nome' value={maiorCompradorQuantidade.nome} />
                                    <Card label='Quantidade' value={maiorCompradorQuantidade.quantidade} />
                                </div>
                                <Card fatherClass={styles.card} label='Valor' value={maiorCompradorQuantidade.valor} />
                            </div>
                            <LoginIcon fatherClass={styles.desktopDashboardIcon} image={excel} alt='Excel' />
                            <div className={`${styles.dashboardIcons} ${styles.mobileDashboardIcons}`}>
                                <LoginIcon fatherClass={`${styles.dashboardIcon} `} image={powerBI} alt='PowerBI' />
                                <LoginIcon fatherClass={`${styles.dashboardIcon} `} image={excel} alt='Excel' />
                            </div>
                        </div>
                        <Title value='Maior Comprador Por Valor' />
                        <div className={styles.itemData}>
                            <LoginIcon fatherClass={styles.desktopDashboardIcon} image={powerBI} alt='PowerBI' />
                            <div className={styles.cards}>
                                <div className={styles.cardGroup}>
                                    <Card label='Nome' value={maiorCompradorValor.nome} />
                                    <Card label='Quantidade' value={maiorCompradorValor.quantidade} />
                                </div>
                                <Card fatherClass={styles.card} label='Valor' value={maiorCompradorValor.valor} />
                            </div>
                            <LoginIcon fatherClass={styles.desktopDashboardIcon} image={excel} alt='Excel' />
                            <div className={`${styles.dashboardIcons} ${styles.mobileDashboardIcons}`}>
                                <LoginIcon fatherClass={`${styles.dashboardIcon} `} image={powerBI} alt='PowerBI' />
                                <LoginIcon fatherClass={`${styles.dashboardIcon} `} image={excel} alt='Excel' />
                            </div>
                        </div>
                    </div>}
            </main>
        </div>
    )
}