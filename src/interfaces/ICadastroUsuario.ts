export interface ICadastroUsuario {
    email: string
    cpf: string
    nome: string
    telefone: string
    sexo: GenderEnum
    endereco: string
    complemento: string
    numero: string
    password: string
    passwordMatch: string
}