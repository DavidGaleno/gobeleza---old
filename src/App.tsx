import { Outlet } from 'react-router-dom'
import './App.css'
import { CatalogoItensProvider } from './Context/CatalogoItensContext'
import { ListaDesejosProvider } from './Context/ListaDesejosContext'
import { CarrinhoComprasProvider } from './Context/CarrinhoComprasContext'
import { UsuariosContextProvider } from './Context/UsuariosContext'



function App() {
  return (
    <UsuariosContextProvider>
      <CarrinhoComprasProvider>
        <ListaDesejosProvider>
          <CatalogoItensProvider>
            <Outlet />
          </CatalogoItensProvider>
        </ListaDesejosProvider>
      </CarrinhoComprasProvider>
    </UsuariosContextProvider>
  )
}

export default App
