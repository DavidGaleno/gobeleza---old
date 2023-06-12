import { Outlet } from 'react-router-dom'
import './App.css'
import { CatalogoItensProvider } from './Context/CatalogoItensContext'
import { ListaDesejosProvider } from './Context/ListaDesejosContext'
import { CarrinhoComprasProvider } from './Context/CarrinhoComprasContext'



function App() {
  return (
    <CarrinhoComprasProvider>
      <ListaDesejosProvider>
        <CatalogoItensProvider>
          <Outlet />
        </CatalogoItensProvider>
      </ListaDesejosProvider>
    </CarrinhoComprasProvider>
  )
}

export default App
