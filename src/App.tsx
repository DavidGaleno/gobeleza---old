import './App.css'

import { ChangeDataScreenVisibleContextProvider } from './context/changeDataScreenVisibleContext'
import { CadastrarPessoaJuridica } from './views/CadastrarPessoaJuridicaScreen'
import { CardPaymentScreen } from './views/CardPaymentScreen'
import { DashboardScreen } from './views/DashboardScreen'
import { SaloonCatalogScreen } from './views/SaloonCatalogScreen'



function App() {
  return (
    <ChangeDataScreenVisibleContextProvider>
      <DashboardScreen />
    </ChangeDataScreenVisibleContextProvider>
  )
}

export default App
