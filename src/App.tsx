import './App.css'

import { ChangeDataScreenVisibleContextProvider } from './context/changeDataScreenVisibleContext'
import { CardPaymentScreen } from './views/CardPaymentScreen'



function App() {
  return (
    <ChangeDataScreenVisibleContextProvider>
      <CardPaymentScreen />
    </ChangeDataScreenVisibleContextProvider>
  )
}

export default App
