import './App.css'

import { ChangeDataScreenVisibleContextProvider } from './context/changeDataScreenVisibleContext'
import { CadastrarPessoaJuridica } from './views/CadastrarPessoaJuridicaScreen'
import { CardPaymentScreen } from './views/CardPaymentScreen'
import { SaloonCatalogScreen } from './views/SaloonCatalogScreen'



function App() {
  return (
    <ChangeDataScreenVisibleContextProvider>
      <CadastrarPessoaJuridica />
    </ChangeDataScreenVisibleContextProvider>
  )
}

export default App
