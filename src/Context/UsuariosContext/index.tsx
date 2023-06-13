import { createContext, useState } from "react";
import { IUsuariosContext } from "../../interfaces/IUsuariosContext";
import { ICliente } from "../../interfaces/ICliente";
import { ICompra } from "../../interfaces/ICompra";

export const UsuariosContext = createContext<IUsuariosContext>({} as IUsuariosContext)
UsuariosContext.displayName = 'UsuariosContext'
export const UsuariosContextProvider = ({ children }: any) => {
    const [clientes, setClientes] = useState<ICliente[]>([
        {
            email: 'davidgaleno@gmail.com',
            nome: 'David Galeno',
            cpf: '086.477.891-05',
            endereco: 'QNJ 35 Lote 2',
            complemento: 'Casa 1',
            numero: 'S/N',
            password: '123123123',
            sexo: 'Masculino',
            telefone: '(42)94002-8922'
        }
    ])
    const [loggedAccount, setLoggedAccount] = useState<ICliente>({} as ICliente)
    const [compras, setCompras] = useState<ICompra[]>([
        {
            id: 1,
            compras: [{
                nome: "Batom",
                quantidade: 1,
                valor: 9.99,
                categoria: "produto"
            },
            {
                nome: "Barbeador",
                quantidade: 2,
                valor: 199.98,
                categoria: "produto"
            },
            {
                nome: "Maquiagem",
                quantidade: 1,
                valor: 29.99,
                categoria: "produto"

            }],
            email: "davidgaleno@gmail.com",
            nome: "David Galeno",
            valor: 239.96
        },
        {
            id: 2,
            compras: [{
                nome: "Manicure",
                quantidade: 1,
                valor: 49.99,
                categoria: "servico"
            },
            {
                nome: "Lavar Cabelo",
                quantidade: 2,
                valor: 89.98,
                categoria: "servico"
            },
            {
                nome: "Pintar Cabelo",
                quantidade: 1,
                valor: 29.99,
                categoria: "servico"

            }],
            email: "davidgaleno@gmail.com",
            nome: "David Galeno",
            valor: 239.96
        }
    ])
    return (
        <UsuariosContext.Provider value={{ clientes, setClientes, loggedAccount, setLoggedAccount, compras, setCompras }}>
            {children}
        </UsuariosContext.Provider>
    )
}