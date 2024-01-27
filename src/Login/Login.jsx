import "../App.css";
// import Layout from "./Layout";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="bg-[url('/LoginPagePic.png')] bg-fixed bg-no-repeat bg-cover min-h-[850px] md:min-h-[900px] h-screen w-screen">
        <main className="container mx-auto font-poppins">
          <section className="md:mx-24 md:pt-24 md:mb-24 flex flex-col md:flex-row ">
            <article className="mt-5 md:mt-0 md:w-3/5">
              <button className="btn bg-[#d2fe71] hover:bg-[#a5cf4a]/80 drop-shadow text-xl font-normal border-none hidden md:flex">
                <span class="material-symbols-outlined">arrow_back</span>
                Back
              </button>
              <h1 className="text-white text-5xl text-center md:text-start lg:text-7xl xl:text-8xl font-semibold mt-10 md:mt-[72px] drop-shadow">
                GreenSculpt
              </h1>
            </article>
            <article className="md:w-2/5 bg-[rgb(255,255,255)]/75 rounded-[20px]">
              <div className="bg-[#8BCA00]/60 rounded-t-[20px] text-center p-[10px]">
                <p className="text-white font-semibold text-[32px]">Login</p>
              </div>
              <div className="flex flex-col p-[20px] relative">
                <div className="flex flex-col">
                  <span
                    class="material-symbols-outlined absolute inset-y-[45px] left-5 text-[#5d6d39]"
                    id="account_circle"
                  >
                    account_circle
                  </span>
                  <input
                    className="mt-[20px] p-[15px] bg-transparent focus:outline-none text-xl border-b-2 border-[#5d6d39] h-[50px] placeholder-[#5d6d39]"
                    type="email"
                    name="login_id"
                    id="login_id"
                    placeholder="Email Adress"
                  />
                </div>
                <i
                  className="material-symbols-outlined absolute inset-y-[105px] left-5 text-[#5d6d39]"
                  id="lock"
                >
                  lock
                </i>
                <input
                  className="mb-[40px] mt-[10px] p-[15px] bg-transparent focus:outline-none border-b-2 text-xl border-[#5d6d39] h-[50px] placeholder-[#5d6d39]"
                  type="password"
                  name="login_password"
                  id="login_password"
                  placeholder="Password"
                />
                <button className="btn bg-[#d2fe71] hover:bg-[#a5cf4a]/80 drop-shadow text-xl font-normal border-none h-[50px] mb-[40px]">
                  Login
                </button>
                <img
                  className="w-40 mx-auto mb-[20px]"
                  src="./LoginWarmUp.png"
                />
                <p className="text-center text-lg mb-[10px]">
                  Don&apos;t have an account?
                </p>
                <Link to="/signup">
                  <button className="btn border-[2px] bg-[rgb(255,255,255)]/0 hover:bg-[rgb(255,255,255)]/80 drop-shadow border-[#5d6d39] text-[#5d6d39] text-xl font-normal w-full">
                    Sign Up
                  </button>
                </Link>
              </div>
            </article>
          </section>
        </main>
      </div>
    </>
  );
};

export default Login;
