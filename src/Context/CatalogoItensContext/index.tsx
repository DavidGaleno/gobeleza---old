import { createContext, useState } from "react";
import { IProduto } from "../../interfaces/IProduto";





import batom from '../../assets/batom.png'
import maquiagem from '../../assets/maquiagem.png'
import barbeador from '../../assets/barbeador.png'
import cortadorUnha from '../../assets/cortador_unha.png'
import tesoura from '../../assets/tesoura.png'
import shampoo from '../../assets/shampoo.png'
import hidratanteFacial from '../../assets/hidratante_facial.png'
import perfumeMasculino from '../../assets/perfume_masculino.png'
import perfumeFeminino from '../../assets/perfume_feminino.png'
import cremeMaos from '../../assets/creme_maos.png'
import cremeCorporal from '../../assets/creme_corporal.png'
import escovaCabelo from '../../assets/escova_cabelo.png'
import gelBarbear from '../../assets/gel_barbear.png'
import lavarCabelo from '../../assets/lavar_cabelo.png'
import cortarCabeloMulher from '../../assets/cortar_cabelo_mulher.png'
import pintarCabeloMulher from '../../assets/pintar_cabelo_mulher.png'
import manicure from '../../assets/manicure.png'
import cortarCabeloHomem from '../../assets/cortar_cabelo_homem.png'
import progressiva from '../../assets/progressiva.png'
import luzes from '../../assets/luzes.png'
import sobrancelha from '../../assets/sobrancelha.png'
import { ICatalogoItens } from "../../interfaces/ICatalogoItens";
import { IServico } from "../../interfaces/IServico";
export const CatalogoItensContext = createContext<ICatalogoItens>({} as ICatalogoItens)
CatalogoItensContext.displayName = 'Catalogo Produtos Context'


const datasHorariosAgendamento = ["Sun Jun 11 2023 08:00:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 08:30:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 09:00:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 09:30:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 10:00:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 10:30:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 11:00:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 11:30:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 12:00:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 12:30:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 13:00:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 13:30:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 14:00:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 14:30:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 15:00:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 15:30:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 16:00:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 16:30:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 17:00:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 17:30:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 18:00:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 18:30:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 19:00:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 19:30:00 GMT-0300 (Horário Padrão de Brasília)",
    "Sun Jun 11 2023 20:00:00 GMT-0300 (Horário Padrão de Brasília)",
]

export const CatalogoItensProvider = ({ children }: any) => {

    const [produtos, setProdutos] = useState<IProduto[]>([
        {
            id: 1,
            nome: 'Batom',
            preco: 9.99,
            imagem: batom,
            listaDesejos: false,
            carrinhoCompras: false,
            quantidadeEstoque: 500
        },
        {
            id: 2,
            nome: 'Barbeador',
            preco: 99.99,
            imagem: barbeador,
            listaDesejos: false,
            carrinhoCompras: false,
            quantidadeEstoque: 50
        },
        {
            id: 3,
            nome: 'Maquiagem',
            preco: 29.99,
            imagem: maquiagem,
            listaDesejos: false,
            carrinhoCompras: false,
            quantidadeEstoque: 146
        },
        {
            id: 4,
            nome: 'Cortador de Unha',
            preco: 19.99,
            imagem: cortadorUnha,
            listaDesejos: false,
            carrinhoCompras: false,
            quantidadeEstoque: 94
        },
        {
            id: 5,
            nome: 'Tesoura',
            preco: 19.99,
            imagem: tesoura,
            carrinhoCompras: false,
            listaDesejos: false,
            quantidadeEstoque: 32
        },
        {
            id: 6,
            nome: "Shampoo",
            preco: 29.99,
            imagem: shampoo,
            carrinhoCompras: false,
            listaDesejos: false,
            quantidadeEstoque: 25
        },
        {
            id: 7,
            nome: "Hidratante Facial",
            preco: 39.99,
            imagem: hidratanteFacial,
            carrinhoCompras: false,
            listaDesejos: false,
            quantidadeEstoque: 10
        },
        {
            id: 8,
            nome: "Perfume Masculino",
            preco: 59.99,
            imagem: perfumeMasculino,
            carrinhoCompras: false,
            listaDesejos: false,
            quantidadeEstoque: 34
        },
        {
            id: 9,
            nome: "Perfume Feminino",
            preco: 109.99,
            imagem: perfumeFeminino,
            carrinhoCompras: false,
            listaDesejos: false,
            quantidadeEstoque: 48
        },
        {
            id: 10,
            nome: "Creme para Mãos",
            preco: 29.99,
            imagem: cremeMaos,
            carrinhoCompras: false,
            listaDesejos: false,
            quantidadeEstoque: 48
        },
        {
            id: 11,
            nome: "Creme Corporal",
            preco: 89.99,
            imagem: cremeCorporal,
            carrinhoCompras: false,
            listaDesejos: false,
            quantidadeEstoque: 23
        },
        {
            id: 12,
            nome: "Escova de Cabelo",
            preco: 209.99,
            imagem: escovaCabelo,
            carrinhoCompras: false,
            listaDesejos: false,
            quantidadeEstoque: 102
        },
        {
            id: 13,
            nome: "Gel de Barbear",
            preco: 49.99,
            imagem: gelBarbear,
            carrinhoCompras: false,
            listaDesejos: false,
            quantidadeEstoque: 48
        }
    ])

    const [servicos, setServicos] = useState<IServico[]>([
        {
            id: 1,
            nome: 'Lavar Cabelo',
            preco: 79.99,
            imagem: lavarCabelo,
            listaDesejos: false,
            carrinhoCompras: false,
            dataHorarioAgendamento: datasHorariosAgendamento
        },
        {
            id: 2,
            nome: 'Cortar Cabelo de Mulher',
            preco: 49.99,
            imagem: cortarCabeloMulher,
            listaDesejos: false,
            carrinhoCompras: false,
            dataHorarioAgendamento: datasHorariosAgendamento

        },
        {
            id: 3,
            nome: 'Manicure',
            preco: 29.99,
            imagem: manicure,
            listaDesejos: false,
            carrinhoCompras: false,
            dataHorarioAgendamento: datasHorariosAgendamento
        },
        {
            id: 4,
            nome: 'Pintar Cabelo Mulher',
            preco: 69.99,
            imagem: pintarCabeloMulher,
            listaDesejos: false,
            carrinhoCompras: false,
            dataHorarioAgendamento: datasHorariosAgendamento
        },
        {
            id: 5,
            nome: 'Cortar Cabelo de Homem',
            preco: 39.99,
            imagem: cortarCabeloHomem,
            carrinhoCompras: false,
            listaDesejos: false,
            dataHorarioAgendamento: datasHorariosAgendamento
        },
        {
            id: 6,
            nome: "Progressiva",
            preco: 199.99,
            imagem: progressiva,
            carrinhoCompras: false,
            listaDesejos: false,
            dataHorarioAgendamento: datasHorariosAgendamento
        },
        {
            id: 7,
            nome: "Luzes",
            preco: 79.99,
            imagem: luzes,
            carrinhoCompras: false,
            listaDesejos: false,
            dataHorarioAgendamento: datasHorariosAgendamento
        },
        {
            id: 8,
            nome: "Sobrancelha",
            preco: 89.99,
            imagem: sobrancelha,
            carrinhoCompras: false,
            listaDesejos: false,
            dataHorarioAgendamento: datasHorariosAgendamento
        },

    ])
    return (
        <CatalogoItensContext.Provider value={{ produtos, setProdutos, servicos, setServicos }}>
            {children}
        </CatalogoItensContext.Provider>
    )
}