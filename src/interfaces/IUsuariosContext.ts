import { Dispatch, SetStateAction } from "react";
import { IUsuario } from "./IUsuario";
import { ICompra } from "./ICompra";
import { ISpecialPasswordUser } from "./ISpecialPassword";

export interface IUsuariosContext {
    usuarios: IUsuario[]
    setUsuarios: Dispatch<SetStateAction<IUsuario[]>>
    loggedAccount: IUsuario
    setLoggedAccount: Dispatch<SetStateAction<IUsuario>>
    compras: ICompra[]
    setCompras: Dispatch<SetStateAction<ICompra[]>>
    specialPasswordUser: ISpecialPasswordUser[]
    setSpecialPasswordUser: Dispatch<SetStateAction<ISpecialPasswordUser[]>>
}