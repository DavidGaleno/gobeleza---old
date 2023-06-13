import { Iitem } from "./Iitem"

export interface ICompra {
    id: number
    email: string
    nome: string
    compras: Iitem[]
    valor: number
}