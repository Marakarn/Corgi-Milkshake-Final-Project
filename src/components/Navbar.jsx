import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <>
            <nav className="bg-[#8BCA00] p-[15px] hidden md:block">
                <div className="flex justify-between items-center">
                    <img className="h-7" src="./Logo.png" alt="Logo" />
                    <ul className="flex justify-end pr-[20px] gap-6 text-xl text-white">
                        <li><NavLink to="/home" className="hover:text-sky-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 transition-all">Home</NavLink></li>
                        <li><NavLink to="/history" className="hover:text-sky-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 transition-all" >History</NavLink></li>
                        <li><NavLink to="/setting" className="hover:text-sky-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 transition-all">Setting</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar