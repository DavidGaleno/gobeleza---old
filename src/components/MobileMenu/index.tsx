import menuHamburguer from '../../assets/menuHamburguer.svg'
import styles from './styles.module.css'
import { LoginIcon } from '../LoginIcon'
import { Link, useLocation } from 'react-router-dom'
interface Props {
    visible: boolean
    setVisible: (visible: boolean) => void
    setItensExibidos?: (itensExibidos: string) => void
}
export const MobileMenu = ({ visible, setVisible, setItensExibidos }: Props) => {
    const location = useLocation()
    return (
        <>
            <div onClick={() => setVisible(!visible)} className={`${styles.fade} ${!visible ? styles.hide : ''}`}>
            </div>

            <div className={`${styles.container} ${visible ? styles.visible : styles.invisible}`}>
                <LoginIcon onClick={() => setVisible(!visible)} fatherClass={styles.icon} image={menuHamburguer} alt='Menu' />
                <div className={styles.options}>
                    {location.pathname === '/catalogo_itens' &&
                        <>
                            <a className={styles.filter} onClick={() => {
                                setItensExibidos?.('Produtos')
                                setVisible(!visible)
                            }}>Produtos</a>
                            <a className={styles.filter} onClick={() => {
                                setItensExibidos?.('Serviços')
                                setVisible(!visible)
                            }}>Serviços</a>
                            <Link color='gray' to={'/catalogo_saloes'}>Salões</Link>

                        </>

                    }
                    <Link color='gray' to={'/minha_conta_usuario'}>Minha Conta</Link>
                    <Link color='gray' to={'/'}>Sair</Link>
                </div>
            </div>
        </>
    )
}