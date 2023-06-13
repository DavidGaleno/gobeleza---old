import { ActionButton } from "../../components/ActionButton"
import { CheckLogin } from "../../components/CheckLogin"
import styles from './styles.module.css'
export const SelectSubscribeOption = () => {
    return (
        <div className={styles.container}>
              <CheckLogin />
            <h1 className={styles.titulo}>Cadastrar:</h1>
            <div className={styles.buttons}>
                <ActionButton value="Salão de Beleza →" path="/cadastrar_salao" />
                <ActionButton value="Usuário →" path="/cadastrar_usuario" />
            </div>
            <ActionButton value="Voltar ←" path="/" />
        </div>
    )
}