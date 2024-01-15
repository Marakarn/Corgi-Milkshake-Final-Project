import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddActivity from './components/AddActivity'
import ModalAddActivity from './components/ModalAddActivity'
import EditActivity from './components/EditActivity'
import ModalEditActivity from './components/ModalEditActivity'
import DeleteActivity from './components/DeleteActivity'
import ModalDeleteActivity from './components/ModalDeleteActivity'
import DeleteAccount from './components/DeleteAccount'
import ModalDeleteAccount from './components/ModalDeleteAccount'
import StartActivity from './components/StartActivity'
import ModalStartActivity from './components/ModalStartActivity'
import ModalEditPersonal from './components/ModalEditPersonal'
import YourActivity from './components/YourActivity'
import Home from './components/Home'
import History from './components/History'
import ModalSignUp from './components/ModalSignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
    // <AddActivity />
    // <ModalAddActivity />
    // <EditActivity />
    // <ModalEditActivity />
    // <DeleteActivity />
    // <ModalDeleteActivity />
    // <DeleteAccount />
    // <ModalDeleteAccount />
    // <StartActivity />
    // <ModalStartActivity />
    // <ModalEditPersonal />
    // <YourActivity />
    // <Home />
    // <History />
    <ModalSignUp />

  )
}

export default App
