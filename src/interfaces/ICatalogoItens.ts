import { Dispatch, SetStateAction } from "react";
import { Iitem } from "./Iitem";

export interface ICatalogoItens {
    itens: Iitem[]
    setItens: Dispatch<SetStateAction<Iitem[]>>
}