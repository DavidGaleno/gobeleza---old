import { createContext, useState } from "react";
import { IListaDesejos } from "../../interfaces/IListaDesejos";
import { Iitem } from "../../interfaces/Iitem";

export const ListaDesejosContext = createContext<IListaDesejos>({} as IListaDesejos)
ListaDesejosContext.displayName = "Lista Desejos Context"

export const ListaDesejosProvider = ({ children }: any) => {
    const [listaDesejos, setListaDesejos] = useState<Iitem[]>([])
    return (
        <ListaDesejosContext.Provider value={{ listaDesejos, setListaDesejos }}>
            {children}
        </ListaDesejosContext.Provider>
    )
}