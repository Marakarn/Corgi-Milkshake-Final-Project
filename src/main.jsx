// import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Setting from './Setting/Setting.jsx';
import Personaldetail from './Personaldetail/Personaldetail.jsx';
import ContactUs from './Contactus/ContactUs.jsx';
import Deleteacc from './DeleteAccount/Deleteacc.jsx';
import Login from './Login/Login.jsx'
import SignUp from './Signup/SignUp.jsx'
import Home from './Home/Home.jsx';
import AddActivity from './AddActivity/AddActivity.jsx'
import ModalAddActivity from './components/ModalAddActivity.jsx'
import EditActivity from './EditActivity/EditActivity.jsx'
import ModalEditActivity from './components/ModalEditActivity.jsx'
import DeleteActivity from './DeleteActivity/DeleteActivity.jsx'
import ModalDeleteActivity from './components/ModalDeleteActivity.jsx'
import DeleteAccount from './DeleteAccount/DeleteAccount.jsx'
import ModalDeleteAccount from './components/ModalDeleteAccount.jsx'
import StartActivity from './StartActivity/StartActivity.jsx'
import ModalStartActivity from './components/ModalStartActivity.jsx'
import ModalEditPersonal from './components/ModalEditPersonal.jsx'
import YourActivity from './YourActivity/YourActivity.jsx'
import History from './History/History.jsx'
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




// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './index.css';
// import App from './App.jsx';
// import Setting from './Setting/Setting.jsx';
// import Personaldetail from './Personaldetail/Personaldetail.jsx';
// import ContactUs from './Contactus/ContactUs.jsx';
// import Deleteacc from './DeleteAccount/Deleteacc.jsx';
// import Login from './Login/Login.jsx';
// import SignUp from './Signup/SignUp.jsx';
// import Home from './Home/Home.jsx';
// import AddActivity from './AddActivity/AddActivity.jsx';
// import ModalAddActivity from './components/ModalAddActivity.jsx';
// import EditActivity from './EditActivity/EditActivity.jsx';
// import ModalEditActivity from './components/ModalEditActivity.jsx';
// import DeleteActivity from './DeleteActivity/DeleteActivity.jsx';
// import ModalDeleteActivity from './components/ModalDeleteActivity.jsx';
// import DeleteAccount from './DeleteAccount/DeleteAccount.jsx';
// import ModalDeleteAccount from './components/ModalDeleteAccount.jsx';
// import StartActivity from './StartActivity/StartActivity.jsx';
// import ModalStartActivity from './components/ModalStartActivity.jsx';
// import ModalEditPersonal from './components/ModalEditPersonal.jsx';
// import YourActivity from './YourActivity/YourActivity.jsx';
// import History from './History/History.jsx';
// import ModalSignUp from './components/ModalSignUp.jsx';

// const router = (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/add-activity" element={<AddActivity />} />
//       <Route path="/modal-add-activity" element={<ModalAddActivity />} />
//       <Route path="/edit-activity" element={<EditActivity />} />
//       <Route path="/modal-edit-activity" element={<ModalEditActivity />} />
//       <Route path="/delete-activity" element={<DeleteActivity />} />
//       <Route path="/modal-delete-activity" element={<ModalDeleteActivity />} />
//       <Route path="/delete-account" element={<DeleteAccount />} />
//       <Route path="/modal-delete-account" element={<ModalDeleteAccount />} />
//       <Route path="/start-activity" element={<StartActivity />} />
//       <Route path="/modal-start-activity" element={<ModalStartActivity />} />
//       <Route path="/modal-edit-personal" element={<ModalEditPersonal />} />
//       <Route path="/your-activity" element={<YourActivity />} />
//       <Route path="/history" element={<History />} />
//       <Route path="/modal-signup" element={<ModalSignUp />} />
//       <Route path="/setting" element={<Setting />} />
//       <Route path="/personaldetail" element={<Personaldetail />} />
//       <Route path="/contact-us" element={<ContactUs />} />
//       <Route path="/delete-acc" element={<Deleteacc />} />
//     </Routes>
//   </BrowserRouter>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   router
// );