import { ActionButton } from "../../components/ActionButton"
import styles from './styles.module.css'
export const SelectPaymentMethodOption = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Selecione o seu Método de Pagamento:</h1>
            <div className={styles.buttons}>
                <ActionButton value="PIX →" path="/pagamento_pix"/>
                <ActionButton value="Cartão →" path="/pagamento_cartao" />
            </div>
                <ActionButton value="Voltar ←" path="/catalogo_itens" />
        </div>
    )
}