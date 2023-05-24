import { Button } from "../../components/Button"
import styles from './styles.module.css'
export const SelectSubscribeOption = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Cadastrar Como:</h1>
            <div className={styles.buttons}>
                <Button value="Salão de Beleza →" />
                <Button value="Pessoa Física →" />
            </div>
                <Button value="Voltar ←" />
        </div>
    )
}