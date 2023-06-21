import { createContext, useState } from "react";
import { ISalaoBeleza } from "../../interfaces/ISalaoBeleza";
import { ISalaoBelezaContext } from "../../interfaces/ISalaoBelezaContext";


//Imagens
import corEUnha from '../../assets/cor&unha.svg'
import fulanetto from '../../assets/fulanetto.svg'
import bellaDonna from '../../assets/bella_donna.jpg'
import espacoChrome from '../../assets/espaço_chrome.jpg'
import salaoDiva from '../../assets/salaoDiva.jpg'

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
        imagem: bellaDonna
    },
    {
        nome: "Espaço Charme",
        cnpj: "76.543.210/0001-87",
        endereco: "Rua D",
        complemento: "Sala 404",
        numero: "40",
        imagem: espacoChrome
    },
    {
        nome: "Salão Diva",
        cnpj: "65.432.109/0001-09",
        endereco: "Rua E",
        complemento: "Sala 505",
        numero: "50",
        imagem: salaoDiva
    }
    ])
    return (
        <SalaoBelezaContext.Provider value={{ saloesBeleza, setSaloesBeleza }}>
            {children}
        </SalaoBelezaContext.Provider>
    )
}