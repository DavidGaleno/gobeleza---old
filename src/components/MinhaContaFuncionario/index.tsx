import styles from './styles.module.css'
import logo from '../../assets/logo.png'
import { Campo } from '../Campo'
import { ActionButton } from '../ActionButton'
export const MinhaContaFuncionario = () => {
    const telefone = 61940028922
    const formattedTelefone = telefone.toString()
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt='GOBELEZA' />
            <div className={styles.dados}>
                <Campo label='Nome' value='David Galeno' changeValue={true} />
                <Campo label='Email' value='chozarplays@gmail.com' changeValue={true} />
                <Campo label='Telefone' value={`(${formattedTelefone.slice(0, 2)}) ${formattedTelefone.substring(2, 3)} ${formattedTelefone.substring(3, 7)}-${formattedTelefone.substring(7, 11)}`} changeValue={true} />
                <Campo label='Endereço' value='QNJ 35 Lote 2 Casa 1' changeValue={true} />
                <Campo label='Sexo' value='Masculino' changeValue={true} />
                <Campo label='Tipo Conta' value='Lojista' changeValue={true} />
                <Campo label='Salão de Beleza' value='BeleZart' changeValue={false} />
            </div>
            <ActionButton fatherClass={styles.button} value="Voltar ←" />

        </div>
    )
}