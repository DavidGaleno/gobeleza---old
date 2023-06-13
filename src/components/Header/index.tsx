import { CarrinhoCompras } from '../CarrinhoCompras'
import { ListaDesejos } from '../ListaDesejos'
import { MobileMenu } from '../MobileMenu'

//Images
import logo from '../../assets/logo.png'
import menuHamburguer from '../../assets/menuHamburguer.svg'
import carrinhoComprasIcon from '../../assets/carrinhoCompras.svg'
import listaDesejosIcon from '../../assets/listaDesejos.svg'
import { LoginIcon } from '../../components/LoginIcon'
import dashboard from '../../assets/dashboard.png'
import specialPassword from '../../assets/specialPassword.png'

import styles from './styles.module.css'
import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CarrinhoComprasContext } from '../../Context/CarrinhoComprasContext'
import { UsuariosContext } from '../../Context/UsuariosContext'
import { ICliente } from '../../interfaces/ICliente'

interface Props {
    setItensExibidos?: (itensExibidos: string) => void
}

export const Header = ({ setItensExibidos }: Props) => {
    const navigate = useNavigate()
    const { setLoggedAccount } = useContext(UsuariosContext)
    const [menuVisible, setMenuVisible] = useState(false)
    const [carrinhoComprasVisible, setCarrinhoComprasVisible] = useState(false)
    const [listaDesejosVisible, setListaDesejosVisible] = useState(false)
    const { carrinhoCompras } = useContext(CarrinhoComprasContext)
    const location = useLocation()
    return (
        <header>
            <img className={styles.logo} src={logo} alt="Logo" />
            <MobileMenu setItensExibidos={setItensExibidos && setItensExibidos} visible={menuVisible} setVisible={setMenuVisible} />
            <CarrinhoCompras visible={carrinhoComprasVisible} setVisible={setCarrinhoComprasVisible} />
            <ListaDesejos visible={listaDesejosVisible} setVisible={setListaDesejosVisible} />
            <nav>
                <div className={styles.desktopMenu}>
                    {location.pathname === '/catalogo_itens' && <>
                        <a className={styles.filter} onClick={() => setItensExibidos?.('Produtos')}>Produtos</a>
                        <a className={styles.filter} onClick={() => setItensExibidos?.('Serviços')}>Serviços</a>
                        <Link color='gray' to={'/catalogo_saloes'}>Salões</Link>
                    </>
                    }
                    <Link color='gray' to={'/minha_conta_usuario'}>Minha Conta</Link>
                    <Link color='gray' onClick={() => setLoggedAccount({} as ICliente)} to={'/'}>Sair</Link>

                </div>
                {location.pathname === '/catalogo_itens' &&
                    <>
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
                    </>
                }
                {location.pathname === '/dashboard' &&
                    <>
                        <LoginIcon onClick={() => navigate('/dashboard')} fatherClass={`${styles.desktopIcon} `} image={dashboard} alt='Dashboard' />
                        <LoginIcon fatherClass={`${styles.desktopIcon} `} image={specialPassword} alt='Senha Acesso Especial' />
                    </>}

            </nav>
        </header>
    )
}