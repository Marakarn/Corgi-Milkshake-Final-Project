import { NavLink } from "react-router-dom";

const HeaderLanding = () => {
    return (
        <>
            <header className="bg-[url('/banner.png')] w-full h-96 bg-cover bg-center bg-no-repeat min-h-[400px] md:min-h-[700px] ">
                <div className="container mx-auto flex justify-left items-center font-poppins">
                    <div className=" mt-40 md:mt-60 md:ps-40">
                        <h1 className="text-6xl font-bold text-white text-center md:text-start lg:text-7xl xl:text-8xl mt-10 md:mt-[72px] drop-shadow">GreenSculpt</h1>
                        <p className="text-white font-semibold md:text-[32px]">Sculpt your discipline.</p>
                        <p className="text-white font-semibold md:text-[32px] ">Sculpt yourself.</p>
                        <div className="flex mt-4 gap-4 md:hidden">
                            <NavLink to="/signup">
                                <button className="btn bg-[#d2fe71] hover:bg-[#a5cf4a]/80 w-full drop-shadow text-xl font-normal border-none">Sign Up</button>
                            </NavLink>
                            <NavLink to="/login">
                                <button className="btn bg-[#d2fe71] hover:bg-[#a5cf4a]/80 w-full drop-shadow text-xl font-normal border-none">Login</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderLanding;