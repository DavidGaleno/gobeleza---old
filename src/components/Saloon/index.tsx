import { ActionButton } from "../ActionButton"

import styles from './styles.module.css'

interface Props {
    image: string
    alt: string
    nome: string
}
export const Saloon = ({ image, alt, nome }: Props) => {
    return (
        <div className={`${styles.container}`}>
            <img src={image} alt={alt} />
            <div className={styles.text}>
                <h2>{nome}</h2>
            </div>
                <ActionButton type="button" value="Visitar →" path="/catalogo_itens" />

        </div>
    )
}