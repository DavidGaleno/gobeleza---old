import { createContext, useState } from "react";
import { IAvaliacaoContext } from "../../interfaces/IAvaliacaoContext";
import { IAvaliacao } from "../../interfaces/IAvaliacao";

export const AvaliacaoContext = createContext<IAvaliacaoContext>({} as IAvaliacaoContext)
AvaliacaoContext.displayName = 'Avaliação Context'

interface Props {
    children: any
}

export const AvaliacaoContextProvider = ({ children }: Props) => {
    const [avaliacoes, setAvaliacoes] = useState([
        { userId: 1, itemId: 1, avaliacao: 4 },
        { userId: 1, itemId: 2, avaliacao: 3 },
        { userId: 1, itemId: 2, avaliacao: 4 },
        { userId: 1, itemId: 2, avaliacao: 3 },
        { userId: 1, itemId: 2, avaliacao: 5 },
        { userId: 1, itemId: 2, avaliacao: 2 },
        { userId: 1, itemId: 2, avaliacao: 4 },
        { userId: 1, itemId: 2, avaliacao: 1 },
        { userId: 1, itemId: 2, avaliacao: 5 },
        { userId: 1, itemId: 2, avaliacao: 3 },
        { userId: 1, itemId: 2, avaliacao: 4 },
        { userId: 1, itemId: 2, avaliacao: 2 },
        { userId: 1, itemId: 3, avaliacao: 5 },
        { userId: 1, itemId: 1, avaliacao: 4 },
        { userId: 1, itemId: 1, avaliacao: 3 },
        { userId: 1, itemId: 1, avaliacao: 5 },
        { userId: 1, itemId: 1, avaliacao: 2 },
        { userId: 1, itemId: 1, avaliacao: 4 },
        { userId: 1, itemId: 1, avaliacao: 1 },
        { userId: 1, itemId: 1, avaliacao: 5 },
        { userId: 1, itemId: 1, avaliacao: 3 },
        { userId: 1, itemId: 1, avaliacao: 4 },
        { userId: 1, itemId: 1, avaliacao: 2 },
        { userId: 1, itemId: 4, avaliacao: 2 },
        { userId: 1, itemId: 3, avaliacao: 4 },
        { userId: 1, itemId: 1, avaliacao: 1 },
        { userId: 1, itemId: 7, avaliacao: 5 },
        { userId: 1, itemId: 2, avaliacao: 3 },
        { userId: 1, itemId: 1, avaliacao: 4 },
        { userId: 1, itemId: 9, avaliacao: 2 },
        { userId: 1, itemId: 9, avaliacao: 2 },
        { userId: 1, itemId: 1, avaliacao: 5 },
        { userId: 1, itemId: 11, avaliacao: 3 },
        { userId: 1, itemId: 12, avaliacao: 3 },] as IAvaliacao[])
    return (
        <AvaliacaoContext.Provider value={{ avaliacoes, setAvaliacoes }}>
            {children}
        </AvaliacaoContext.Provider>
    )
}