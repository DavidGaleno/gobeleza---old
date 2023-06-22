//Images
//CSS
import styles from './styles.module.css'

//React Libraries
import { useEffect, useState } from 'react'

//Components
import { Title } from '../../components/Title'
import { Item } from '../../components/Item'
import { useContext } from 'react'
import { CatalogoItensContext } from '../../Context/CatalogoItensContext'

//Interfaces
import { Iitem } from '../../interfaces/Iitem'
import { Header } from '../../components/Header'
import { CheckLogin } from '../../components/CheckLogin'
import { CadastroProdutoButton } from '../../components/CadastroProdutoButton'
import { UsuariosContext } from '../../Context/UsuariosContext'
import { CadastroProdutoScreen } from '../../components/CadastroProdutoScreen'
import { ItemFuncionario } from '../../components/ItemFuncionario'
import axios from 'axios'


export const ItemsCatalogScreen = () => {
    const api = axios.create({
        baseURL: "https://localhost:3000"
    })
    useEffect(() => {
        const produtos = api.get('/produtos').then(data => console.log(data))
        const servicos = api.get('/servicos').then(data => console.log(data))

    }, [])

    const { loggedAccount } = useContext(UsuariosContext)
    const [itensExibidos, setItensExibidos] = useState('Produtos')
    const { itens } = useContext(CatalogoItensContext)
    const [cadastroProdutoScreenVisible, setCadastroProdutoScreenVisible] = useState(false)
    const [fixed, setFixed] = useState(false)

    return (
        <div className={styles.container}>
            <CheckLogin />
            <Header setItensExibidos={setItensExibidos} />
            <Header fixed={fixed} setFixed={setFixed} setItensExibidos={setItensExibidos} />
            <CadastroProdutoScreen visible={cadastroProdutoScreenVisible} setVisible={setCadastroProdutoScreenVisible} />
            <main>
                <Title value={`Catalogo de ${itensExibidos}`} />
                <div className={styles.itens}>
                    {loggedAccount.tipoConta === 'Lojista' && <CadastroProdutoButton onClick={() => setCadastroProdutoScreenVisible(!cadastroProdutoScreenVisible)} />}
                    {loggedAccount.tipoConta === 'Cliente' &&
                        itensExibidos === 'Produtos' &&
                        itens.filter(item => item.categoria === 'produto').map((item: Iitem) => (
                            <Item item={item} key={item.id} image={item.imagem} alt={item.nome} nome={item.nome} preco={item.preco} />
                        ))
                    }
                    {loggedAccount.tipoConta === 'Cliente' && itensExibidos === 'Serviços' &&
                        itens.filter(item => item.categoria === 'servico').map((item: Iitem) => (
                            <Item item={item} key={item.id} image={item.imagem} alt={item.nome} nome={item.nome} preco={item.preco} />
                        ))
                    }


                    {loggedAccount.tipoConta === 'Lojista' &&
                        itensExibidos === 'Produtos' &&
                        itens.filter(item => item.categoria === 'produto').map((item: Iitem) => (
                            <ItemFuncionario item={item} key={item.id} image={item.imagem} alt={item.nome} nome={item.nome} preco={item.preco} />
                        ))
                    }
                    {loggedAccount.tipoConta === 'Lojista' && itensExibidos === 'Serviços' &&
                        itens.filter(item => item.categoria === 'servico').map((item: Iitem) => (
                            <ItemFuncionario item={item} key={item.id} image={item.imagem} alt={item.nome} nome={item.nome} preco={item.preco} />
                        ))
                    }

                </div>
            </main>
        </div>
    )
}