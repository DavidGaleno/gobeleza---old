import { Outlet } from 'react-router-dom'
import './App.css'
import { CatalogoItensProvider } from './Context/CatalogoItensContext'
import { ListaDesejosProvider } from './Context/ListaDesejosContext'



function App() {
  return (
    <ListaDesejosProvider>
      <CatalogoItensProvider>
        <Outlet />
      </CatalogoItensProvider>
    </ListaDesejosProvider>
  )
}

export default App
