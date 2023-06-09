//Images
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import styles from './styles.module.css'
import { Select } from '../../components/Select'
import { ICadastroUsuario } from '../../interfaces/ICadastroUsuario'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z.object({
  email: z.string().nonempty('*Obrigatório').email('Formato de Email inválido').transform(email => email.toLocaleLowerCase()).refine(email => email.endsWith('@gmail.com') || email.endsWith('@hotmail.com'), {
    message: 'O E-mail deve terminar com @gmail.com ou @hotmail.com'
  }),
  cpf: z.string().nonempty('*Obrigatório').transform(cpf => cpf.toLocaleLowerCase().trim()),
  nome: z.string().nonempty('*Obrigatório').transform(nome => nome.toLocaleLowerCase().trim()),
  telefone: z.string().nonempty('*Obrigatório').transform(telefone => telefone.toLocaleLowerCase().trim()),
  sexo: z.string().nonempty('*Obrigatório'),
  endereco: z.string().nonempty('*Obrigatório').transform(endereco => endereco.toLocaleLowerCase().trim()),
  complemento: z.string().nonempty('*Obrigatório').transform(complemento => complemento.toLocaleLowerCase().trim()),
  numero: z.string().nonempty('*Obrigatório').transform(numero => numero.trim()),
  password: z.string().nonempty('*Obrigatório').min(8, 'A senha precisa ter no mínimo 8 caracteres').transform(password => password.trim()),
  passwordMatch: z.string().nonempty('*Obrigatório').min(8, 'A senha precisa ter no mínimo 8 caracteres').transform(password => password.trim())
}).refine(data => data.password === data.passwordMatch, {
  path: ['passwordMatch'],
  message:'As duas senhas não correspondem'
})

export const CadastrarPessoaFisica = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ICadastroUsuario>({
    resolver: zodResolver(createUserFormSchema)
  })

  const createUser = (data: unknown) => {
    console.log(data)
  }

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="GoBeleza" />
      <form onSubmit={handleSubmit(createUser)} className={styles.form}>
        <Input error={errors.email?.message} register={register} registerName={'email'} type='text' placeholder="Digite seu Email" mask="email" />
        <Input error={errors.cpf?.message} register={register} registerName={'cpf'} type='text' placeholder="Digite seu CPF" mask='cpf' />
        <Input error={errors.nome?.message} register={register} registerName={'nome'} type='text' placeholder="Digite seu Nome" />
        <Input error={errors.telefone?.message} register={register} registerName={'telefone'} type='text' placeholder="Digite seu Telefone" mask="phoneNumber" />
        <Select fatherClass={styles.select} register={register} registerName={'sexo'} label='Selecione seu Sexo' options={['masculino', 'feminino']} />
        <div className={styles.endereco}>
          <Input error={errors.endereco?.message} register={register} registerName={'endereco'} type='text' placeholder="Endereço" />
          <Input error={errors.complemento?.message} register={register} registerName={'complemento'} type='text' placeholder="Complemento" />
          <Input error={errors.numero?.message} register={register} registerName={'numero'} type='text' placeholder="Número ou S/N" />
        </div>
        <Input error={errors.password?.message} register={register} registerName={'password'} type='password' placeholder="Digite sua senha" />
        <Input error={errors.passwordMatch?.message} register={register} registerName={'passwordMatch'} type='password' placeholder="Confirme sua senha" />
        <div className={styles.buttons}>
          <ActionButton value="Confirmar →" />
          <ActionButton value="Voltar ←" />
        </div>
      </form>
    </div >
  )
}