import "../App.css";
import Backfunction from "../components/Backfunction";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const Login = () => {

  const navigate = useNavigate();

  const initialFormData = { email: "", password: ""}
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { id, value } =e.target;
    setFormData({
        ...formData,
        [id]:value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Endpoint ของ backend API ที่คุณต้องการส่งข้อมูลไป
      const backendEndpoint = 'https://greensculpt.onrender.com/login';
      // const backendEndpoint = `http://localhost:3000/login`;

      // สร้าง object ที่มีข้อมูลทั้งหมดที่คุณต้องการส่งไปยัง backend
      const requestData = {
          login_email: formData.email,
          login_password: formData.password,
          // เพิ่ม property ต่อไปตามต้องการ
      };

      // ส่ง HTTP POST request ไปยัง backend
      const response = await axios.post(backendEndpoint, requestData);

      // ตรวจสอบ response จาก backend
      if (response.status === 200) {
          alert("Login successfully");

          const { token } = response.data;
          const decodedToken = jwtDecode(token);
          localStorage.setItem("token", JSON.stringify(decodedToken));

          // ใช้ decodedToken ตามต้องการ
          console.log(decodedToken); // เพื่อดูข้อมูลใน decodedToken ใน console

          // console.log(decodedToken);
          navigate("/home")
          window.location.reload()
          return response;

      } else {
          alert("Login Failed");
      }
      
      } catch (error) {
      console.error("Error sending data to the backend:", error);
      alert("An error occurred while sending data to the backend.");
      }
  };

  return (
    <>
      <div className="bg-[url('/LoginPagePic.png')] bg-fixed bg-no-repeat bg-cover min-h-[850px] md:min-h-[900px] h-screen w-screen">
        <main className="container mx-auto font-poppins">
          <section className="md:mx-24 md:pt-24 md:mb-24 flex flex-col md:flex-row ">
            <article className="mt-5 md:mt-0 md:w-3/5">
              <Backfunction path={"/"}/>
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
                    className="material-symbols-outlined absolute inset-y-[45px] left-5 text-[#5d6d39]"
                    id="account_circle"
                  >
                    account_circle
                  </span>
                  <input
                    className="mt-[20px] p-[15px] email bg-transparent focus:outline-none text-xl border-b-2 border-[#5d6d39] h-[50px] placeholder-[#5d6d39]"
                    type="email"
                    name="login_id"
                    id="email"
                    placeholder="Email Address"
                    onChange={handleInputChange}
                  />
                </div>
                <i
                  className="material-symbols-outlined absolute inset-y-[105px] left-5 text-[#5d6d39]"
                  id="lock"
                >
                  lock
                </i>
                <input
                  className="mb-[40px] mt-[10px] p-[15px] password bg-transparent focus:outline-none border-b-2 text-xl border-[#5d6d39] h-[50px] placeholder-[#5d6d39]"
                  type="password"
                  name="login_password"
                  id="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                />
                <button className="btn bg-[#d2fe71] hover:bg-[#a5cf4a]/80 drop-shadow text-xl font-normal border-none h-[50px] mb-[40px]" onClick={handleSubmit}>
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
