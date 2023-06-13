import { useContext, useEffect } from "react"
import { UsuariosContext } from "../../Context/UsuariosContext"
import { useNavigate } from "react-router-dom"

export const CheckLogin = () => {
    const navigate = useNavigate()
    const { loggedAccount } = useContext(UsuariosContext)
    useEffect(() => {
        if (Object.keys(loggedAccount).length === 0) navigate('/')
    }, [])
    return (
        <></>
    )
}