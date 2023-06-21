import { Dispatch, SetStateAction } from "react"
import { IAvaliacao } from "./IAvaliacao"

export interface IAvaliacaoContext {
    avaliacoes: IAvaliacao[]
    setAvaliacoes: Dispatch<SetStateAction<IAvaliacao[]>>
}