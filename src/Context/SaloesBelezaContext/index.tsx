import { createContext, useState } from "react";
import { ISalaoBeleza } from "../../interfaces/ISalaoBeleza";
import { ISalaoBelezaContext } from "../../interfaces/ISalaoBelezaContext";


//Imagens
import corEUnha from '../../assets/cor&unha.svg'
import fulanetto from '../../assets/fulanetto.svg'

export const SalaoBelezaContext = createContext<ISalaoBelezaContext>({} as ISalaoBelezaContext)
SalaoBelezaContext.displayName = "Salão Beleza Context"

interface Props {
    children: React.ReactNode
}

export const SalaoBelezaProvider: React.FC<Props> = ({ children }: Props) => {
    const [saloesBeleza, setSaloesBeleza] = useState<ISalaoBeleza[]>([{
        nome: "Cor e Unha",
        cnpj: "12.345.678/0001-23",
        endereco: "Rua A",
        complemento: "Sala 101",
        numero: "10",
        imagem: corEUnha
    },
    {
        nome: "Fulanetto",
        cnpj: "98.765.432/0001-10",
        endereco: "Rua B",
        complemento: "Sala 202",
        numero: "20",
        imagem: fulanetto
    },
    {
        nome: "Bella Donna",
        cnpj: "87.654.321/0001-54",
        endereco: "Rua C",
        complemento: "Sala 303",
        numero: "30",
        imagem: "salao3.jpg"
    },
    {
        nome: "Espaço Charme",
        cnpj: "76.543.210/0001-87",
        endereco: "Rua D",
        complemento: "Sala 404",
        numero: "40",
        imagem: "salao4.jpg"
    },
    {
        nome: "Salão Diva",
        cnpj: "65.432.109/0001-09",
        endereco: "Rua E",
        complemento: "Sala 505",
        numero: "50",
        imagem: "salao5.jpg"
    },
    {
        nome: "Elegância Hair",
        cnpj: "54.321.098/0001-76",
        endereco: "Rua F",
        complemento: "Sala 606",
        numero: "60",
        imagem: "salao6.jpg"
    },
    {
        nome: "Luxo e Beleza",
        cnpj: "43.210.987/0001-98",
        endereco: "Rua G",
        complemento: "Sala 707",
        numero: "70",
        imagem: "salao7.jpg"
    },
    {
        nome: "Salão Fashion",
        cnpj: "32.109.876/0001-21",
        endereco: "Rua H",
        complemento: "Sala 808",
        numero: "80",
        imagem: "salao8.jpg"
    },
    {
        nome: "Hair Studio",
        cnpj: "21.098.765/0001-67",
        endereco: "Rua I",
        complemento: "Sala 909",
        numero: "90",
        imagem: "salao9.jpg"
    },
    {
        nome: "Bela Vista Beauty",
        cnpj: "10.987.654/0001-34",
        endereco: "Rua J",
        complemento: "Sala 1010",
        numero: "100",
        imagem: "salao10.jpg"
    }
    ])
    return (
        <SalaoBelezaContext.Provider value={{ saloesBeleza, setSaloesBeleza }}>
            {children}
        </SalaoBelezaContext.Provider>
    )
}