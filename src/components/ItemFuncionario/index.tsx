import { useContext, useState } from "react"
import { Iitem } from "../../interfaces/Iitem"
import { ActionButton } from "../ActionButton"

import styles from './styles.module.css'
import { CatalogoItensContext } from "../../Context/CatalogoItensContext"
import { CadastroProdutoScreen } from "../CadastroProdutoScreen"

interface Props {
    item: Iitem
    image: string
    alt: string
    nome: string
    preco: number
}

export const ItemFuncionario = ({ item, image, alt, nome, preco }: Props) => {
    const { itens, setItens } = useContext(CatalogoItensContext)
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CadastroProdutoScreen item={item} visible={visible} setVisible={setVisible} />
            <div className={`${styles.container}`}>
                <img className={styles.image} src={image} alt={alt} />
                <div className={styles.text}>
                    <h2>{nome}</h2>
                    <h3>R${preco.toString().replace('.', ',')}{ }</h3>
                </div>
                <div className={styles.buttons}>
                    <ActionButton type="button" onClick={() => setVisible(!visible)} value="Editar →" />
                    <ActionButton type="button" onClick={() => {
                        const updatedItens = [...itens]
                        const itemExcluido = itens.find(itemCadastrado => itemCadastrado.id === item.id)!
                        updatedItens.splice(updatedItens.indexOf(itemExcluido), 1)
                        setItens(updatedItens)
                    }} value="Excluir →" />
                </div>
            </div>
        </>
    )
}