// import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Setting from './Setting.jsx';
import Personaldetail from './Personaldetail.jsx';
import ContactUs from './ContactUs.jsx';
import Deleteacc from './Deleteacc.jsx';
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'
import Home from './Home.jsx';
import AddActivity from './AddActivity/AddActivity.jsx'
import ModalAddActivity from './components/ModalAddActivity.jsx'
import EditActivity from './EditActivity.jsx'
import ModalEditActivity from './components/ModalEditActivity.jsx'
import DeleteActivity from './DeleteActivity.jsx'
import ModalDeleteActivity from './components/ModalDeleteActivity.jsx'
import DeleteAccount from './DeleteAccount.jsx'
import ModalDeleteAccount from './components/ModalDeleteAccount.jsx'
import StartActivity from './StartActivity.jsx'
import ModalStartActivity from './components/ModalStartActivity.jsx'
import ModalEditPersonal from './components/ModalEditPersonal.jsx'
import YourActivity from './YourActivity.jsx'
import History from './History.jsx'
import ModalSignUp from './components/ModalSignUp.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/signup",
    element:<SignUp />
  },
  {
    path:"/home",
    element:<Home />
  },
  {
    path:"/add-activity",
    element:<AddActivity />
  },
  {
    path:"/modal-add-activity",
    element:<ModalAddActivity />
  },
  {
    path:"/edit-activity",
    element:<EditActivity />
  },
  {
    path:"/modal-edit-activity",
    element:<ModalEditActivity />
  },
  {
    path:"/delete-activity",
    element:<DeleteActivity />
  },
  {
    path:"/modal-delete-activity",
    element:<ModalDeleteActivity />
  },
  {
    path:"/delete-account",
    element:<DeleteAccount />
  },
  {
    path:"/modal-delete-account",
    element:<ModalDeleteAccount />
  },
  {
    path:"/start-activity",
    element:<StartActivity />
  },
  {
    path:"/modal-start-activity",
    element:<ModalStartActivity />
  },
  {
    path:"/modal-edit-personal",
    element:<ModalEditPersonal />
  },
  {
    path:"/your-activity",
    element:<YourActivity />
  },
  {
    path:"/history",
    element:<History />
  },
  {
    path:"/modal-signup",
    element:<ModalSignUp />
  },
  {
    path:"/setting",
    element:<Setting />
  },
  {
    path:"/personaldetail",
    element:<Personaldetail />
  },
  {
    path:"/contact-us",
    element:<ContactUs />
  },
  {
    path:"/delete-acc",
    element:<Deleteacc />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)