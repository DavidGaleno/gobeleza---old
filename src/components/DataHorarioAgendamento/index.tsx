import { ActionButton } from "../ActionButton"
import styles from './styles.module.css'
import { z } from "zod"
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Select } from "../Select"
import { Iitem } from "../../interfaces/Iitem"
import { useContext } from "react"
import { CarrinhoComprasContext } from "../../Context/CarrinhoComprasContext"
import { CatalogoItensContext } from "../../Context/CatalogoItensContext"
interface Props {
    item: Iitem
    visible: boolean
    setVisible: (visible: boolean) => void
}


export const DataHorarioAgendamentoScreen = ({ item, visible, setVisible }: Props) => {

    const { itens, setItens } = useContext(CatalogoItensContext)
    const { valorTotal, setValorTotal } = useContext(CarrinhoComprasContext)

    const dataHorarioAgendamentoSchema = z.object({
        dataHorarioAgendamento: z.string()
            .nonempty('*Obrigatório')
    });
    type dataHorarioAgendamentoUseFormType = z.infer<typeof dataHorarioAgendamentoSchema>
    const dataHorarioAgendamentoUseForm = useForm<dataHorarioAgendamentoUseFormType>({
        resolver: zodResolver(dataHorarioAgendamentoSchema)
    })
    const enviar = (data: dataHorarioAgendamentoUseFormType) => {
        if (item.quantidadeCarrinho >= 0) {
            const updatedCarrinhoCompras = [...itens]
            updatedCarrinhoCompras[itens.indexOf(item)].quantidadeCarrinho += 1
            updatedCarrinhoCompras[itens.indexOf(item)].dataHorarioEscolhidos!.push(data.dataHorarioAgendamento)
            updatedCarrinhoCompras[itens.indexOf(item)].dataHorarioAgendamento!.splice(updatedCarrinhoCompras[itens.indexOf(item)].dataHorarioAgendamento!.indexOf(data.dataHorarioAgendamento), 1)
            setItens(updatedCarrinhoCompras)
        }
        setVisible(!visible)
        setValorTotal(valorTotal + item.preco)
        reset()
    }
    const { handleSubmit, formState: { errors }, reset } = dataHorarioAgendamentoUseForm
    return (
        <>
            <div className={`${styles.fade} ${visible ? '' : styles.hide}`} ></div>
            <FormProvider {...dataHorarioAgendamentoUseForm}>
                <form onSubmit={handleSubmit(enviar)} className={`${styles.container} ${visible ? '' : styles.hide}`} >
                    <Select error={errors.dataHorarioAgendamento?.message} label={"Selecione um horário"} options={item.dataHorarioAgendamento!} registerName={"dataHorarioAgendamento"} value={''} />
                    <div className={styles.buttons}>
                        <ActionButton type="button" value="Voltar ←" onClick={() => setVisible(!visible)} />
                        <ActionButton type="submit" value="Confirmar →" />
                    </div>
                </form>
            </FormProvider>
        </>
    )
}