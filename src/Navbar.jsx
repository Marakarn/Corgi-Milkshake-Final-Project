const Navbar = () => {

    return (
        <>
            <nav className="bg-[#8BCA00] p-[15px] hidden md:block">
                <div className="flex justify-between items-center">
                    <img className="h-7" src="./Logo.png" alt="Logo" />
                    <ul className="flex justify-end pr-[20px] gap-6 text-xl text-white">
                        <li><a className="hover:text-sky-700 transition-all" href="/home">Home</a></li>
                        <li><a className="hover:text-sky-700 transition-all" href="/history">History</a></li>
                        <li><a className="hover:text-sky-700 transition-all" href="/setting">Setting</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar