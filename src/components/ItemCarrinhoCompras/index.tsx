import { ActionButton } from "../ActionButton"
import { DesireListButton } from "../DesireListButton"

import styles from './styles.module.css'

interface Props {
    image: string
    alt: string
    nome: string
    preco: number
    fatherClass?: string
}
export const ItemCarrinhoCompras = ({ image, alt, nome, preco, fatherClass }: Props) => {
    return (
        <div className={`${styles.container} ${fatherClass}`}>
            <span>X</span>
            <img src={image} alt={alt} />
            <div className={styles.text}>
                <h2>{nome}</h2>
                <h3>R${preco.toString().replace('.', ',')}</h3>
            </div>

        </div>
    )
}