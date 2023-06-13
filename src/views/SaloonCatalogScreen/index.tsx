//Images
import corEUnha from '../../assets/cor&unha.svg'
import fulanetto from '../../assets/fulanetto.svg'
//CSS
import styles from './styles.module.css'

//React Libraries

import { Title } from '../../components/Title'
import { Saloon } from '../../components/Saloon'
import { Header } from '../../components/Header'
import { CheckLogin } from '../../components/CheckLogin'


export const SaloonCatalogScreen = () => {
    return (
        <div className={styles.container}>
              <CheckLogin />

            <Header/>
            <main>
                <Title value="Salões" />
                <div className={styles.itens}>
                    <Saloon image={corEUnha} alt={'Cor&Unha'} nome={'Cor&Unha'} />
                    <Saloon image={fulanetto} alt={'Fulanetto'} nome={'Fulanetto'} />

                </div>
            </main>
        </div>
    )
}