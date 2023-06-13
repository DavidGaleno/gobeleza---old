import { Dispatch, SetStateAction } from "react";
import { ICliente } from "./ICliente";

export interface IUsuariosContext {
    clientes: ICliente[]
    setClientes: Dispatch<SetStateAction<ICliente[]>>
    loggedAccount: ICliente
    setLoggedAccount: Dispatch<SetStateAction<ICliente>>
}