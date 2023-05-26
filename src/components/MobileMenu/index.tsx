import menuHamburguer from '../../assets/menuHamburguer.svg'
import styles from './styles.module.css'
import { LoginIcon } from '../LoginIcon'
import { useState } from 'react'
interface Props {
    menuVisible: boolean
    setMenuVisible: (menuVisible: boolean) => void
}
export const MobileMenu = ({ menuVisible, setMenuVisible }: Props) => {
    return (
        <div className={`${styles.container} ${menuVisible ? styles.visible : styles.invisible}`}>
            <LoginIcon onClick={() => setMenuVisible(!menuVisible)} fatherClass={styles.icon} image={menuHamburguer} alt='Menu' />
            <div className={styles.options}>
                <a href="#">Produtos</a>
                <a href="#">Serviços</a>
                <a href="#">Minha Conta</a>
                <a href="#">Sair</a>
            </div>
        </div>
    )
}