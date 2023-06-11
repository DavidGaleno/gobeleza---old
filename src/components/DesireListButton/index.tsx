import { useContext } from 'react'
import styles from './styles.module.css'
import { ListaDesejosContext } from '../../Context/ListaDesejosContext'
import { Iitem } from '../../interfaces/Iitem'
interface Props {
    item: Iitem
}

export const DesireListButton = ({ item }: Props) => {
    const { listaDesejos, setListaDesejos } = useContext(ListaDesejosContext)

    return (

        <div onClick={() => listaDesejos.includes(item) ? setListaDesejos(listaDesejos.filter(listaItem => listaItem !== item)) : setListaDesejos(prevListaDesejos => [...prevListaDesejos, item])} className={styles.ball} > {listaDesejos.includes(item) ? <span className={styles.check}>&#10003;</span> : <span className={styles.plus}>+</span>} </div>

    )
}