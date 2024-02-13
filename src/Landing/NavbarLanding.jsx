import { NavLink } from "react-router-dom";
import LogoImg from "/Logo.png";

const NavbarLanding = () => {
    return (
        <>
            <nav className="bg-[#8BCA00] p-[15px] hidden md:block">
                <div className="flex justify-between items-center">
                    <img className="h-7" src={LogoImg} alt="Logo" />
                    <ul className="flex justify-end pr-[20px] gap-6 text-xl text-white">
                        <li>
                            <NavLink to="/login" className="hover:text-sky-700 transition-all">
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/signup"
                                className="hover:text-sky-700 transition-all"
                            >
                                Signup
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavbarLanding;