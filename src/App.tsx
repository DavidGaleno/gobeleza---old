import './App.css'
import { MinhaContaFuncionario } from './components/MinhaContaFuncionario'
import { MinhaContaUsuario } from './components/MinhaContaUsuario'
import { ChangeDataScreenVisibleContextProvider } from './context/changeDataScreenVisibleContext'
import { CatalogoScreen } from './views/catalogoScreen'


function App() {
  return (
    <ChangeDataScreenVisibleContextProvider>
      <MinhaContaUsuario />
    </ChangeDataScreenVisibleContextProvider>
  )
}

export default App
