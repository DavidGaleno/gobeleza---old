import { Dispatch, SetStateAction } from "react"
import { Iitem } from "./Iitem"

export interface ICarrinhoCompras {
    carrinhoCompras: Iitem[]
    setCarrinhoCompras: Dispatch<SetStateAction<Iitem[]>>
    valorTotal: number
    setValorTotal: Dispatch<SetStateAction<number>>
}