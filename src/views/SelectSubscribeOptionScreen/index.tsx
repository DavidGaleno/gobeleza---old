import { ActionButton } from "../../components/ActionButton"
import styles from './styles.module.css'
export const SelectSubscribeOption = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Cadastrar Como:</h1>
            <div className={styles.buttons}>
                <ActionButton value="Salão de Beleza →" />
                <ActionButton value="Pessoa Física →" />
            </div>
                <ActionButton value="Voltar ←" />
        </div>
    )
}