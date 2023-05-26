import menuHamburguer from '../../assets/menuHamburguer.svg'
import styles from './styles.module.css'
import { LoginIcon } from '../LoginIcon'
interface Props {
    visible: boolean
    setVisible: (visible: boolean) => void
}
export const MobileMenu = ({ visible, setVisible }: Props) => {
    return (
        <div className={`${styles.container} ${visible ? styles.visible : styles.invisible}`}>
            <LoginIcon onClick={() => setVisible(!visible)} fatherClass={styles.icon} image={menuHamburguer} alt='Menu' />
            <div className={styles.options}>
                <a href="#">Produtos</a>
                <a href="#">Serviços</a>
                <a href="#">Minha Conta</a>
                <a href="#">Sair</a>
            </div>
        </div>
    )
}