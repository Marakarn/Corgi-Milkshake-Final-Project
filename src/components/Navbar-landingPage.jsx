import { NavLink } from "react-router-dom";
import LogoImg from "/Logo.png";

const NavbarLangingPage = () => {
  return (
    <>
        <div className="bg-[#8BCA00] flex justify-between items-center">
            <div className="flex flex-start items-center gap-6">
                <img className="h-7" src={LogoImg} alt="Logo" />
                <div className="ps-4 text-xl text-white">
                <p>Your Ultimate Workout Partner</p>
            </div>
        </div>
        <nav className="bg-[#8BCA00] p-[15px] flex justify-end md:block">      
            <ul className="flex gap-6 text-xl text-white">
            <li>
                <NavLink to="/home" className="hover:text-sky-700 transition-all">
                Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/" className="hover:text-sky-700 transition-all">
                About Us
                </NavLink>
            </li>
            <li>
                <NavLink to="/" className="hover:text-sky-700 transition-all">
                Log In / Sign Up
                </NavLink>
            </li>
            <li>
                <NavLink to="/" className="hover:text-sky-700 transition-all">
                Contact Us
                </NavLink>
            </li>
            </ul>
        </nav>
        </div>

    </>
  );
};

export default NavbarLangingPage;
