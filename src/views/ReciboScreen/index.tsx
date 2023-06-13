import { ActionButton } from '../../components/ActionButton'
import { Campo } from '../../components/Campo'
import styles from './styles.module.css'
import logo from '../../assets/logo.png'
import { CheckLogin } from '../../components/CheckLogin'
export const ReciboScreen = () => {

    return (

        <div className={styles.container}>
                <CheckLogin />
            <img className={styles.logo} src={logo} alt='GOBELEZA' />
            <div className={styles.dados}>
                <Campo label='Nome' value='David Galeno' changeValue={false} />
                <Campo label='Item' value='Batom' changeValue={false} />
                <Campo label='Salão' value='Belezart' changeValue={false} />
                <Campo label='Forma de Pagamento' value='PIX' changeValue={false} />
                <Campo label='Número do PIX' value='12345678910' changeValue={false} />
                <Campo label='Valor Total' value='R$1,99' changeValue={false} />

            </div>
            <div className={styles.buttons}>
                <ActionButton fatherClass={styles.button} value="Voltar ←" path='/catalogo_itens' />
                <ActionButton fatherClass={styles.button} value="Email →" path='/catalogo_itens' />
            </div>
        </div>
    )
}