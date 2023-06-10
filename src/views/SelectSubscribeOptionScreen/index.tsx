import { ActionButton } from "../../components/ActionButton"
import styles from './styles.module.css'
export const SelectSubscribeOption = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Cadastrar Como:</h1>
            <div className={styles.buttons}>
                <ActionButton value="Salão de Beleza →" path="/cadastrar_salao" />
                <ActionButton value="Pessoa Física →" path="/cadastrar_usuario" />
            </div>
            <ActionButton value="Voltar ←" path="/" />
        </div>
    )
}