import { Dispatch, SetStateAction } from "react";
import { Iitem } from "./Iitem";

export interface IListaDesejos {
    listaDesejos: Iitem[]
    setListaDesejos: Dispatch<SetStateAction<Iitem[]>>
}