import { Button } from "../../components/Button"
import styles from './styles.module.css'
export const SelectPasswordRecoveryOptionsScreen = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Como Deseja Mudar sua Senha:</h1>
            <div className={styles.buttons}>
                <Button value="Email →" />
                <Button value="Telefone →" />
            </div>
                <Button value="Voltar ←" />
        </div>
    )
}