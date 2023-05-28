import './App.css'

import { ChangeDataScreenVisibleContextProvider } from './context/changeDataScreenVisibleContext'
import { CardPaymentScreen } from './views/CardPaymentScreen'
import { SaloonCatalogScreen } from './views/SaloonCatalogScreen'



function App() {
  return (
    <ChangeDataScreenVisibleContextProvider>
      <SaloonCatalogScreen />
    </ChangeDataScreenVisibleContextProvider>
  )
}

export default App
