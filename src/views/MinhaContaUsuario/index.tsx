import styles from './styles.module.css'
import logo from '../../assets/logo.png'
import { Campo } from '../../components/Campo'
import { ActionButton } from '../../components/ActionButton'
import { useNavigate } from 'react-router-dom'
import { CheckLogin } from '../../components/CheckLogin'
import { useContext } from 'react'
import { UsuariosContext } from '../../Context/UsuariosContext'
export const MinhaContaUsuario = () => {
    <CheckLogin />

    const { loggedAccount } = useContext(UsuariosContext)



    const navigate = useNavigate()
    return (

        <div className={styles.container}>
            <CheckLogin />

            <img className={styles.logo} src={logo} alt='GOBELEZA' />
            <div className={styles.dados}>
                <Campo label='Email' value={loggedAccount.email} changeValue={true} />
                <Campo label='Nome' value={loggedAccount.nome} changeValue={true} />
                <Campo label='Telefone' value={loggedAccount.telefone} changeValue={true} />
                <Campo label='Endereço' value={loggedAccount.endereco} changeValue={true} />
                <Campo label='Sexo' value={loggedAccount.sexo} changeValue={true} />
                <Campo label='Senha' value={loggedAccount.password} changeValue={true} />
                <Campo label='Tipo Conta' value={loggedAccount.tipoConta} changeValue={true} />
            </div>
            <ActionButton type="button"  fatherClass={styles.button} value="Voltar ←" onClick={() => navigate(-1)} />
        </div>

    )
}