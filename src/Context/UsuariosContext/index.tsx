import { createContext, useState } from "react";
import { IUsuariosContext } from "../../interfaces/IUsuariosContext";
import { ICliente } from "../../interfaces/ICliente";

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
    return (
        <UsuariosContext.Provider value={{ clientes, setClientes }}>
            {children}
        </UsuariosContext.Provider>
    )
}