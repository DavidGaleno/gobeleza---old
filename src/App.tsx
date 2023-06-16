import { Outlet } from 'react-router-dom'
import './App.css'
import { CatalogoItensProvider } from './Context/CatalogoItensContext'
import { ListaDesejosProvider } from './Context/ListaDesejosContext'
import { CarrinhoComprasProvider } from './Context/CarrinhoComprasContext'
import { UsuariosContextProvider } from './Context/UsuariosContext'
import { SalaoBelezaProvider } from './Context/SaloesBelezaContext'



function App() {
  return (
    <UsuariosContextProvider>
      <CarrinhoComprasProvider>
        <ListaDesejosProvider>
          <SalaoBelezaProvider>
            <CatalogoItensProvider>
              <Outlet />
            </CatalogoItensProvider>
          </SalaoBelezaProvider>
        </ListaDesejosProvider>
      </CarrinhoComprasProvider>
    </UsuariosContextProvider>
  )
}

export default App
