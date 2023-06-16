//Images

//CSS
import styles from './styles.module.css'

//React Libraries

import { Title } from '../../components/Title'
import { Saloon } from '../../components/Saloon'
import { Header } from '../../components/Header'
import { CheckLogin } from '../../components/CheckLogin'
import { useContext } from 'react'
import { SalaoBelezaContext } from '../../Context/SaloesBelezaContext'


export const SaloonCatalogScreen = () => {
    const { saloesBeleza } = useContext(SalaoBelezaContext)
    return (
        <div className={styles.container}>
            <CheckLogin />

            <Header />
            <main>
                <Title value="Salões" />
                <div className={styles.itens}>
                    {saloesBeleza.map(salaoBeleza => (
                        <Saloon image={salaoBeleza.imagem} alt={salaoBeleza.nome} nome={salaoBeleza.nome} />
                    ))}
                </div>
            </main>
        </div>
    )
}