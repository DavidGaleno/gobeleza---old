import './App.css'
import { MinhaContaFuncionario } from './components/MinhaContaFuncionario'
import { MinhaContaUsuario } from './components/MinhaContaUsuario'
import { ChangeDataScreenVisibleContextProvider } from './context/changeDataScreenVisibleContext'
import { CardPaymentScreen } from './views/CardPaymentScreen'
import { PIXPaymentScreen } from './views/PIXPaymentScreen'
import { SelectPaymentMethodOption } from './views/SelectPaymentMethodOptions'
import { CatalogoScreen } from './views/catalogoScreen'


function App() {
  return (
    <ChangeDataScreenVisibleContextProvider>
      <CardPaymentScreen />
    </ChangeDataScreenVisibleContextProvider>
  )
}

export default App
