//Images
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'
import styles from './styles.module.css'
import { File } from '../../components/File'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const cadastroPessoaJuridicaSchema = z.object({
  email: z.string().nonempty('*Obrigatório').email('Formato de Email inválido').transform(email => email.toLocaleLowerCase()).refine(email => email.endsWith('@gmail.com') || email.endsWith('@hotmail.com'), {
    message: 'O E-mail deve terminar com @gmail.com ou @hotmail.com'
  }),
  nome: z.string().nonempty('*Obrigatório').transform(nome => nome.toLocaleLowerCase().trim()),
  cnpj: z.string().nonempty('*Obrigatório').transform(cnpj => cnpj.toLocaleLowerCase().trim()),
  telefone: z.string().nonempty('*Obrigatório').transform(telefone => telefone.toLocaleLowerCase().trim()),
  endereco: z.string().nonempty('*Obrigatório').transform(endereco => endereco.toLocaleLowerCase().trim()),
  complemento: z.string().nonempty('*Obrigatório').transform(complemento => complemento.toLocaleLowerCase().trim()),
  numero: z.string().nonempty('*Obrigatório').transform(numero => numero.trim()),
  image: z.instanceof(FileList).refine(list => list.item(0) !== null, '*Obrigatório').transform(files => files.item(0))
})

type CadastroUsuarioType = z.infer<typeof cadastroPessoaJuridicaSchema>


export const CadastrarPessoaJuridica = () => {

  const cadastroPessoaJuridicaUseForm = useForm<CadastroUsuarioType>({
    resolver: zodResolver(cadastroPessoaJuridicaSchema)
  })

  const navigate = useNavigate()


  const { handleSubmit, formState: { errors } } = cadastroPessoaJuridicaUseForm
  const cadastrar = (data: CadastroUsuarioType) => {
    console.log(data)
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <FormProvider {...cadastroPessoaJuridicaUseForm}>
        <form className={styles.form} onSubmit={handleSubmit(cadastrar)}>
          <Input error={errors.email?.message} registerName='email' type='text' placeholder="Digite seu Email" mask='mail' />
          <Input error={errors.cnpj?.message} registerName='cnpj' type='text' placeholder="Digite seu CNPJ" mask='cpf' />
          <Input error={errors.nome?.message} registerName='nome' type='text' placeholder="Digite seu Nome" />
          <Input error={errors.telefone?.message} registerName='telefone' type='text' placeholder="Digite seu Telefone" mask="phoneNumber" />
          <div className={styles.endereco}>
            <Input error={errors.endereco?.message} registerName='endereco' type='text' placeholder="Endereço" />
            <Input error={errors.complemento?.message} registerName='complemento' type='text' placeholder="Complemento" />
            <Input error={errors.numero?.message} registerName='numero' type='text' placeholder="Número ou S/N" />
          </div>
          <File registerName='image' error={errors.image?.message} label='Adicione uma foto do salão' />
          <div className={styles.buttons}>
            <ActionButton value="Confirmar →" />
            <ActionButton value="Voltar ←" path='/cadastrar_opcoes' />
          </div>
        </form>
      </FormProvider>
    </div >
  )
}