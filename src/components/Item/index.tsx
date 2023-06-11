import { Iitem } from "../../interfaces/Iitem"
import { ActionButton } from "../ActionButton"
import { DesireListButton } from "../DesireListButton"

import styles from './styles.module.css'

interface Props {
    item: Iitem
    image: string
    alt: string
    nome: string
    preco: number
}

export const Item = ({ item, image, alt, nome, preco }: Props) => {


    return (
        <div className={`${styles.container}`}>
            <img src={image} alt={alt} />
            <div className={styles.text}>
                <h2>{nome}</h2>
                <h3>R${preco.toString().replace('.', ',')}</h3>
            </div>
            <div className={styles.buttons}>
                <ActionButton value="Comprar →" />
                <DesireListButton item={item} />
            </div>

        </div>
    )
}