import { IitemCompra } from "./IitemCompra"

export interface ICompra {
    id: number
    email: string
    nome: string
    compras: IitemCompra[]
    valor: number
}