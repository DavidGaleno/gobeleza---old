import { Dispatch, SetStateAction } from "react";
import { IProduto } from "./IProduto";
import { IServico } from "./IServico";

export interface ICatalogoItens {
    produtos: IProduto[]
    setProdutos: Dispatch<SetStateAction<IProduto[]>>
    servicos: IServico[]
    setServicos: Dispatch<SetStateAction<IServico[]>>
}