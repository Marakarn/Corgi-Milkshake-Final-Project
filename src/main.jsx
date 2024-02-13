// import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Setting from "./Setting/Setting.jsx";
import Personaldetail from "./Personaldetail/Personaldetail.jsx";
import ContactUs from "./Contactus/ContactUs.jsx";
import Deleteacc from "./DeleteAccount/Deleteacc.jsx";
import Login from "./Login/Login.jsx";
import SignUp from "./Signup/SignUp.jsx";
import Home from "./Home/Home.jsx";
import AddActivity from "./AddActivity/AddActivity.jsx";
import Validateref from "./ValidateRef.jsx";
import LandingPage from "./Landing/langing-page.jsx";
import EditActivity from "./EditActivity/EditActivity.jsx";
import DeleteActivity from "./DeleteActivity/DeleteActivity.jsx";
import DeleteAccount from "./DeleteAccount/DeleteAccount.jsx";
import StartActivity from "./StartActivity/StartActivity.jsx";
import YourActivity from "./YourActivity/YourActivity.jsx";
import History from "./History/History.jsx";

import React, { useState, useEffect, useContext } from "react";

const UserRoute = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => { },
    [localStorage.getItem("token")]);

  if (!token) {
    return <Login />;
  } else {
    return children;
  }

};

const UserRoute2 = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => { },
    [localStorage.getItem("token")]);

  if (token) {
    return <Home />;
  } else {
    return children;
  }

};

export default UserRoute2;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/landing-page",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <UserRoute2><Login /></UserRoute2>,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <UserRoute><Home /></UserRoute>,
  },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
  {
    path: "/add-activity",
    element: <AddActivity />,
  },
  {
    path: "/edit-activity/:id",
    element: <EditActivity />,
  },
  {
    path: "/delete-activity/:id",
    element: <DeleteActivity />,
  },
  {
    path: "/delete-account",
    element: <DeleteAccount />,
  },
  {
    path: "/start-activity/:id",
    element: <StartActivity />,
  },
  {
    path: "/your-activity/:_id",
    element: <YourActivity />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/personaldetail",
    element: <Personaldetail />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/delete-acc",
    element: <Deleteacc />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);