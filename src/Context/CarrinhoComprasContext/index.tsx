import { createContext, useState } from "react";
import { ICarrinhoCompras } from "../../interfaces/ICarrinhoCompras";
import { Iitem } from "../../interfaces/Iitem";

export const CarrinhoComprasContext = createContext<ICarrinhoCompras>({} as ICarrinhoCompras)
CarrinhoComprasContext.displayName = "Carrinho Compras Context"

export const CarrinhoComprasProvider = ({ children }: any) => {
    const [carrinhoCompras, setCarrinhoCompras] = useState<Iitem[]>([])
    const [valorTotal, setValorTotal] = useState<number>(0)
    return (
        <CarrinhoComprasContext.Provider value={{ carrinhoCompras, setCarrinhoCompras, valorTotal, setValorTotal }}>
            {children}
        </CarrinhoComprasContext.Provider>
    )
}