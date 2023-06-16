import { Dispatch, SetStateAction } from "react";
import { ISalaoBeleza } from "./ISalaoBeleza";

export interface ISalaoBelezaContext {
    saloesBeleza: ISalaoBeleza[]
    setSaloesBeleza: Dispatch<SetStateAction<ISalaoBeleza[]>>
}