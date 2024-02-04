import "../App.css";
// import Layout from "./Layout";
// import Backfunction from "./components/Backfunction";
import { Link } from "react-router-dom";

const SignUpOld = () => {
    return (
    <>
    <div className="bg-[url('/moutain_pic.png')] bg-fixed bg-no-repeat bg-cover min-h-[1800px] md:min-h-[1100px] h-screen w-screen">
    
        <main className="container mx-auto font-poppins">
            <section className="pt-20 relative">

            <Link to="/login">
                <button className="btn bg-[#d2fe71] hover:bg-[#a5cf4a]/80 drop-shadow text-xl font-normal border-none hidden md:flex absolute top-[90px] left-[10px]">
                        <span class="material-symbols-outlined">arrow_back</span>
                            Back
                        </button>
            </Link>

                <div className="bg-[#8BCA00]/60 text-center rounded-t-[20px] p-[10px]">
                    <h2 className="text-white font-semibold text-[32px]">Sign Up</h2>
                </div>
                <div className="flex flex-col md:flex-row bg-[rgb(255,255,255)]/75 ">
                    <div className="md:w-1/5 flex justify-center" >
                        <div class="justify-center bg-grey-lighter pt-10 md:p-24">
                            <label class="w-48 h-48 md:h-36 md:w-36 flex flex-col items-center justify-center bg-gray-200 text-blue rounded-[40px] shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-[#8BCA00]">
                            <span class="material-symbols-outlined">
                                photo_camera
                                </span>
                                <p class="mt-2 text-base text-center leading-normal">Select a Photo</p>
                                <input type='file' accept=".jpg, .png, .jpeg" class="hidden" />
                            </label>
                        </div>
                    </div>
                    <div className="md:w-4/5 flex flex-col md:flex-row">
                        <div className="pt-10 md:pt-24 p-10">
                            <div className="md:flex md:justify-evenly">
                                <div className="md:w-2/5">
                                    <label className="font-medium text-xl text-gray-800" htmlFor="Email">Email</label>
                                    <input className="w-full p-2 mb-10 bg-transparent border-b-2 border-gray-800 focus:outline-none placeholder-gray-700" type="email" placeholder="Email Address"/>
                                </div>
                                {/* Div เปล่า ทำให้ด้านข้างเสมอกันกับข้างล่าง */}
                                <div className="md:w-2/5"></div>
                            </div>
                            <div className="md:flex md:justify-evenly">
                                <div className="md:w-2/5">
                                    <label className="font-medium text-xl text-gray-800" htmlFor="Password">Password</label>
                                    <input className="w-full p-2 mb-10 bg-transparent border-b-2 border-gray-800 focus:outline-none placeholder-gray-700" type="password" placeholder="Password"/>
                                </div>
                                <div className="md:w-2/5">
                                    <label className="font-medium text-xl text-gray-800" htmlFor="Confirm Password">Confirm Password</label>
                                    <input className="w-full p-2 mb-20 bg-transparent border-b-2 border-gray-800 focus:outline-none placeholder-gray-700" type="password" placeholder="Password"/>
                                </div>
                            </div>

                            <div className="md:flex justify-evenly">
                                <div className="md:w-2/5">
                                    <label className="font-medium text-xl text-gray-800" htmlFor="First Name">First Name</label>
                                    <input className="w-full p-2 mb-10 bg-transparent border-b-2 border-gray-800 focus:outline-none placeholder-gray-700" type="text" placeholder="First Name"/>
                                </div>
                                <div className="md:w-2/5">
                                    <label className="font-medium text-xl text-gray-800" htmlFor="Last Name">Last Name</label>
                                    <input className="w-full p-2 mb-10 bg-transparent border-b-2 border-gray-800 focus:outline-none placeholder-gray-700" type="text" placeholder="Last Name"/>
                                </div>
                            </div>

                            <div className="md:flex md:justify-evenly">
                                <div className="md:w-2/5">
                                    <label className="font-medium text-xl text-gray-800" htmlFor="Date of Birth">Date of Birth</label>
                                    <input className="w-full p-2 mb-10 bg-transparent border-b-2 border-gray-800 focus:outline-none placeholder-gray-700" type="date"/>
                                </div>

                                <div className="md:w-2/5 md:flex md:justify-between">
                                    <div className="w-full md:w-2/5">
                                        <label className="font-medium text-xl text-gray-800" htmlFor="Height">Height</label>
                                        <input className="w-full p-2 mb-10 bg-transparent border-b-2 border-gray-800 focus:outline-none placeholder-gray-700" type="text" placeholder="Height : cm"/>
                                    </div>
                                    <div className="w-full md:w-2/5">
                                        <label className="font-medium text-xl text-gray-800" htmlFor="Weight">Weight</label>
                                        <input className="w-full p-2 mb-10 bg-transparent border-b-2 border-gray-800 focus:outline-none placeholder-gray-700" type="text" placeholder="Weight : kg"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="md:flex md:justify-evenly">
                                <div className="md:w-2/5">
                                    <label className="font-medium text-xl text-gray-800" htmlFor="Gender">Gender</label>
                                    <select className="w-full p-2 mb-10 bg-transparent border-b-2 border-gray-800 focus:outline-none placeholder-gray-700" id="gender">
                                        <option value="" selected>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="notspecified">Not specified</option>
                                    </select>
                                </div>

                                <div className="md:w-2/5">
                                    <label className="font-medium text-xl text-gray-800" htmlFor="PhoneNumber">Phone Number</label>
                                    <input className="w-full p-2 mb-20 bg-transparent border-b-2 border-gray-800 focus:outline-none placeholder-gray-700" type="number" placeholder="123-456-789"/>
                                </div>
                            </div>
                            <div className="md:flex md:justify-evenly">
                                <div className="md:w-2/5">
                                <button className="btn bg-[#d2fe71] hover:bg-[#a5cf4a]/80 w-full drop-shadow text-xl font-normal border-none">Sign Up</button>
                                </div>
                                {/* Div เปล่า ทำให้ด้านข้างเสมอกันกับข้างล่าง */}
                                <div className="md:w-2/5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    
    </div>
    </>
    )
}

export default SignUpOld