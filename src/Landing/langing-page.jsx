// import React from "react";
// import { Link } from "react-router-dom";
// import path from "path"; // Import the path module
import "../App.css";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import LogoImg from "/Logo.png";
import NavbarLanding from "./NavbarLanding";
import HeaderLanding from "./HeaderLanding";
import MainLanding from "./MainLanding";
import FooterLanding from "./FooterLanding";


const LandingPage = () => {
  return (
    <>
      <NavbarLanding />
      <HeaderLanding />
      <MainLanding />
      <FooterLanding />
      <Footer />
    </>
  );
};

export default LandingPage;
