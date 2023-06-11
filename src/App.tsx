import { Outlet } from 'react-router-dom'
import './App.css'
import { CatalogoItensProvider } from './Context/CatalogoItensContext'



function App() {
  return (
    <CatalogoItensProvider>
      <Outlet />
    </CatalogoItensProvider>
  )
}

export default App
