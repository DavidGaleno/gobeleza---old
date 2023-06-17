import { ActionButton } from "../../components/ActionButton"
import styles from './styles.module.css'
export const SelectSubscribeOption = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Cadastrar:</h1>
            <div className={styles.buttons}>
                <ActionButton type="button" value="Salão de Beleza →" path="/cadastrar_salao" />
                <ActionButton type="button" value="Usuário →" path="/cadastrar_usuario" />
            </div>
            <ActionButton type="button" value="Voltar ←" path="/" />
        </div>
    )
}