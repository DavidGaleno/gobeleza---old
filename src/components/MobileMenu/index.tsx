import menuHamburguer from '../../assets/menuHamburguer.svg'
import styles from './styles.module.css'
import { LoginIcon } from '../LoginIcon'
import { Link } from 'react-router-dom'
interface Props {
    visible: boolean
    setVisible: (visible: boolean) => void
}
export const MobileMenu = ({ visible, setVisible }: Props) => {
    return (
        <>
            <div onClick={() => setVisible(!visible)} className={`${styles.fade} ${!visible ? styles.hide : ''}`}>
            </div>

            <div className={`${styles.container} ${visible ? styles.visible : styles.invisible}`}>
                <LoginIcon onClick={() => setVisible(!visible)} fatherClass={styles.icon} image={menuHamburguer} alt='Menu' />
                <div className={styles.options}>
                    <a href="#">Produtos</a>
                    <a href="#">Serviços</a>
                    <a href="#">Minha Conta</a>
                    <Link color='gray' to={'/'}>Sair</Link>
                </div>
            </div>
        </>
    )
}