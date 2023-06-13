//Images
//CSS
import styles from './styles.module.css'

//React Libraries
import { useState } from 'react'

//Components
import { Title } from '../../components/Title'
import { Item } from '../../components/Item'
import { useContext } from 'react'
import { CatalogoItensContext } from '../../Context/CatalogoItensContext'

//Interfaces
import { Iitem } from '../../interfaces/Iitem'
import { Header } from '../../components/Header'
import { CheckLogin } from '../../components/CheckLogin'


export const ItemsCatalogScreen = () => {


    const [itensExibidos, setItensExibidos] = useState('Produtos')
    const { itens } = useContext(CatalogoItensContext)


    return (
        <div className={styles.container}>
            <CheckLogin />
            <Header setItensExibidos={setItensExibidos} />
            <main>
                <Title value={`Catalogo de ${itensExibidos}`} />
                <div className={styles.itens}>
                    {itensExibidos === 'Produtos' ?
                        itens.filter(item => item.categoria === 'produto').map((item: Iitem) => (
                            <Item item={item} key={item.id} image={item.imagem} alt={item.nome} nome={item.nome} preco={item.preco} />
                        ))
                        :
                        itens.filter(item => item.categoria === 'servico').map((item: Iitem) => (
                            <Item item={item} key={item.id} image={item.imagem} alt={item.nome} nome={item.nome} preco={item.preco} />
                        ))
                    }
                </div>
            </main>
        </div>
    )
}