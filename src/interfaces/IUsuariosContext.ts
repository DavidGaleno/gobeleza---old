import { Dispatch, SetStateAction } from "react";
import { ICliente } from "./ICliente";
import { ICompra } from "./ICompra";

export interface IUsuariosContext {
    clientes: ICliente[]
    setClientes: Dispatch<SetStateAction<ICliente[]>>
    loggedAccount: ICliente
    setLoggedAccount: Dispatch<SetStateAction<ICliente>>
    compras: ICompra[]
    setCompras: Dispatch<SetStateAction<ICompra[]>>
}