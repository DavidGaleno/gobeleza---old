import styles from './styles.module.css'
import logo from '../../assets/logo.png'
export const MinhaConta = () => {
    return(
        <div className={styles.container}>
                <img className={styles.logo} src={logo} alt='GOBELEZA' />
                <div className={styles.dados}>
                    
                </div>
        </div>
    )
}