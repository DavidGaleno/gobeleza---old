import { Dispatch, SetStateAction } from "react";
import { IProduto } from "./IProduto";
import { IServico } from "./IServico";

export interface IListaDesejos {
    listaDesejos: IProduto[] | IServico[]
    setListaDesejos: Dispatch<SetStateAction<IProduto[] | IServico[]>>
}