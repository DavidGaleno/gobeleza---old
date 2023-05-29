import { Title } from '../../components/Title'
import logo from '../../assets/logo.png'
import dashboard from '../../assets/dashboard.png'
import specialPassword from '../../assets/specialPassword.png'
import menuHamburguer from '../../assets/menuHamburguer.svg'
import powerBI from '../../assets/powerBISymbol.png'
import excel from '../../assets/excelSymbol.png'
import styles from './styles.module.css'
import { LoginIcon } from '../../components/LoginIcon'
import { MobileMenu } from '../../components/MobileMenu'
import { useState } from 'react'
import { Card } from '../../components/Card'
export const DashboardScreen = () => {
    const [menuVisible, setMenuVisible] = useState(false)

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
                        <span className={`${styles.category} ${styles.filter}`}>Produtos</span>
                        <span className={`${styles.category} ${styles.filter}`}>Serviços</span>
                        <span className={`${styles.category} ${styles.filter}`}>Usuários</span>
                    </div>
                    <div className={styles.categories}><span className={styles.filter}>Todos</span></div>
                </div>
                <div className={styles.data}>
                    <LoginIcon fatherClass={styles.desktopDashboardIcon} image={powerBI} alt='PowerBI' />
                    <div className={styles.cards}>
                        <Card label='Quantidade' value='353' />
                        <Card label='Porcentagem' value='100%' />
                    </div>
                    <LoginIcon fatherClass={styles.desktopDashboardIcon} image={excel} alt='Excel' />

                    <div className={`${styles.dashboardIcons} ${styles.mobileDashboardIcons}`}>
                        <LoginIcon fatherClass={`${styles.dashboardIcon} `} image={powerBI} alt='PowerBI' />
                        <LoginIcon fatherClass={`${styles.dashboardIcon} `} image={excel} alt='Excel' />
                    </div>
                </div>
            </main>
        </div>
    )
}