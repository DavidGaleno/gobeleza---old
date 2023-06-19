//Images

//CSS
import styles from './styles.module.css'

//React Libraries

import { Title } from '../../components/Title'
import { Saloon } from '../../components/Saloon'
import { Header } from '../../components/Header'
import { CheckLogin } from '../../components/CheckLogin'
import { useContext, useState } from 'react'
import { SalaoBelezaContext } from '../../Context/SaloesBelezaContext'


export const SaloonCatalogScreen = () => {
    const { saloesBeleza } = useContext(SalaoBelezaContext)
    const [fixed, setFixed] = useState(false)
    return (
        <div className={styles.container}>
            <CheckLogin />

            <Header />
            <Header fixed={fixed} setFixed={setFixed} />
            <main>
                <Title value="Salões" />
                <div className={styles.itens}>
                    {saloesBeleza.map(salaoBeleza => (
                        <Saloon key={salaoBeleza.cnpj} image={salaoBeleza.imagem} alt={salaoBeleza.nome} nome={salaoBeleza.nome} />
                    ))}
                </div>
            </main>
        </div>
    )
}