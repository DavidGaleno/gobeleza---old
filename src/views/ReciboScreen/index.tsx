import { ActionButton } from '../../components/ActionButton'
import { Campo } from '../../components/Campo'
import styles from './styles.module.css'
import logo from '../../assets/logo.png'
import { CheckLogin } from '../../components/CheckLogin'
import { useContext, useEffect } from 'react'
import { UsuariosContext } from '../../Context/UsuariosContext'
import { CarrinhoComprasContext } from '../../Context/CarrinhoComprasContext'
import { CatalogoItensContext } from '../../Context/CatalogoItensContext'
import { IitemCompra } from '../../interfaces/IitemCompra'
import { ICompra } from '../../interfaces/ICompra'
export const ReciboScreen = () => {
    const { itens, setItens } = useContext(CatalogoItensContext)
    const { carrinhoCompras, valorTotal, setValorTotal } = useContext(CarrinhoComprasContext)
    const { loggedAccount, compras, setCompras } = useContext(UsuariosContext)
    useEffect(() => {
        const itensCompras: IitemCompra[] = []
        carrinhoCompras.map(itemCompra => {
            itensCompras.push({
                nome: itemCompra.nome,
                quantidade: itemCompra.quantidadeCarrinho,
                valor: itemCompra.preco * itemCompra.quantidadeCarrinho
            })
        })
        const compra: ICompra = {
            id: compras.length + 1,
            email: loggedAccount.email,
            nome: loggedAccount.nome,
            compras: itensCompras,
            valor: valorTotal
        }
        console.log(carrinhoCompras)
        const updatedItens = [...itens]
        updatedItens.forEach(item => {
            if (carrinhoCompras.includes(item))
                item.quantidadeCarrinho = 0
        })
        setValorTotal(0)
        setItens(updatedItens)
        setCompras(prevCompras => [...prevCompras, compra])
    }, [])
    return (
        <div className={styles.container}>
            <CheckLogin />
            <img className={styles.logo} src={logo} alt='GOBELEZA' />
            <div className={styles.dados}>
                <Campo label='Nome' value='David Galeno' changeValue={false} />
                <Campo label='Item' value='Batom' changeValue={false} />
                <Campo label='Salão' value='Belezart' changeValue={false} />
                <Campo label='Forma de Pagamento' value='PIX' changeValue={false} />
                <Campo label='Número do PIX' value='12345678910' changeValue={false} />
                <Campo label='Valor Total' value='R$1,99' changeValue={false} />

            </div>
            <div className={styles.buttons}>
                <ActionButton fatherClass={styles.button} value="Voltar ←" path='/catalogo_itens' />
                <ActionButton fatherClass={styles.button} value="Email →" path='/catalogo_itens' />
            </div>
        </div>
    )
}