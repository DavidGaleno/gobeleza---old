import { Outlet } from 'react-router-dom'
import './App.css'
import { CatalogoItensProvider } from './Context/CatalogoItensContext'
import { ListaDesejosProvider } from './Context/ListaDesejosContext'
import { CarrinhoComprasProvider } from './Context/CarrinhoComprasContext'
import { UsuariosContextProvider } from './Context/UsuariosContext'
import { SalaoBelezaProvider } from './Context/SaloesBelezaContext'
import { AvaliacaoContextProvider } from './Context/AvaliacaoContext'



function App() {
  return (
    <UsuariosContextProvider>
      <CarrinhoComprasProvider>
        <ListaDesejosProvider>
          <SalaoBelezaProvider>
            <AvaliacaoContextProvider>
              <CatalogoItensProvider>
                <Outlet />
              </CatalogoItensProvider>
            </AvaliacaoContextProvider>
          </SalaoBelezaProvider>
        </ListaDesejosProvider>
      </CarrinhoComprasProvider>
    </UsuariosContextProvider>
  )
}

export default App
