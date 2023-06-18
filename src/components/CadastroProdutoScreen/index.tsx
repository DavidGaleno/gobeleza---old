//Images
import logo from '../../assets/logo.png'
import { ActionButton } from '../../components/ActionButton'
import { Input } from '../../components/Input'
import { useForm, FormProvider } from 'react-hook-form'
import styles from './styles.module.css'
import { Select } from '../../components/Select'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { CatalogoItensContext } from '../../Context/CatalogoItensContext'
import { tipoItemEnum } from '../../Enuns/tipoItemEnum'
import { File } from '../File'

interface Props {
  visible: boolean
  setVisible: (visible: boolean) => void
}

export const CadastroProdutoScreen = ({ visible, setVisible }: Props) => {

  const { setItens } = useContext(CatalogoItensContext)


  const cadastroProdutoSchema = z.object({
    nome: z.string().nonempty('*Obrigatório').transform(nome => nome.toLocaleLowerCase().trim()),
    preco: z.coerce.number().min(0.1, 'O produto deve custar no mínimo 1 centavo').refine(preco => Number(preco.toFixed(2))),
    categoria: z.enum([tipoItemEnum.produto, tipoItemEnum.servico]),
    imagem: z.instanceof(FileList).refine(list => list.item(0) !== null, { message: '*Obrigatório' }).transform(files => files.item(0)),
    quantidadeEstoque: z.coerce.number().min(1, 'O produto deve conter ao menos uma unidade no estoque para ser cadastrado')
  })

  type CadastroProdutoType = z.infer<typeof cadastroProdutoSchema>


  const cadastroProdutoUseForm = useForm<CadastroProdutoType>({
    resolver: zodResolver(cadastroProdutoSchema)
  })




  const { handleSubmit, register, formState: { errors } } = cadastroProdutoUseForm
  const cadastrar = (data: CadastroProdutoType) => {
    setItens(prevItens => [...prevItens, { ...data, id: prevItens.length + 1, listaDesejos: false, carrinhoCompras: false, quantidadeCarrinho: 0, imagem: data.imagem!.name }])
    setVisible(!visible)
  }

  const [categoria, setCategoria] = useState('')



  return (
    <>
      <div className={`${styles.fade} ${visible ? '' : styles.hide}`}></div>
      <div className={`${styles.container} ${visible ? '' : styles.hide}`}>
        <img className={styles.logo} src={logo} alt="GoBeleza" />
        <FormProvider {...cadastroProdutoUseForm} >
          <form onSubmit={handleSubmit(cadastrar)} className={styles.form}>
            <Input error={errors.nome?.message} registerName={'nome'} type='text' placeholder="Digite o nome do produto" />
            <Input error={errors.preco?.message} registerName={'preco'} type='text' placeholder="Digite o preço do produto" />
            <File label={'Selecione a imagem do produto'} registerName={'imagem'} />
            <Select error={errors.categoria?.message} onChange={(e) => setCategoria(e.target.value)} fatherClass={styles.select} registerName={'categoria'} label='Selecione seu Sexo' options={[tipoItemEnum.produto, tipoItemEnum.servico]} />
            {categoria === 'produto' &&
              <Input error={errors.quantidadeEstoque?.message} registerName={'quantidadeEstoque'} type='number' placeholder="Digite a quantidade do produto em seu estoque" />
            }
            {categoria === 'servico' &&
              <input {...register('quantidadeEstoque')} type="hidden" name="" value={1} />
            }
            <div className={styles.buttons}>
              <ActionButton type="submit" value="Confirmar →" />
              <ActionButton type="button" value="Voltar ←" onClick={() => setVisible(!visible)} />
            </div>
          </form>
        </FormProvider>
      </div >
    </>
  )
}