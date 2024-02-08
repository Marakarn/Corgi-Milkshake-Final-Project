// import React from "react";
// import { Link } from "react-router-dom";
// import path from "path"; // Import the path module
import "./App.css";

const LandingPage = () => {
  return (
    <>
      <header className="bg-[url('/banner.png')] w-full h-96 bg-cover bg-center bg-no-repeat min-h-[400px] md:min-h-[700px] ">
        <div className="container mx-auto flex justify-left items-center font-poppins">
          <div className="w-1/2 mt-60 ps-40">
            <h1 className="text-6xl font-bold text-white text-center md:text-start lg:text-7xl xl:text-8xl mt-10 md:mt-[72px] drop-shadow">GreenSculpt</h1>
            <p className="text-white font-semibold text-[32px]">Sculpt your discipline.</p>
            <p className="text-white font-semibold text-[32px]">Sculpt yourself.</p>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-12 mb-8 flex justify-center">
        <h2 className="text-4xl font-bold mb-4 text-center text-[#8BCA00]">Start Your Fitness Journey Today</h2>
      </main>

      <section>
        <div className="container mx-auto grid grid-cols-3 gap-4 items-center font-poppins">
          <div className="rounded-lg overflow-hidden flex flex-col items-center justify-center">
            <img
              src="/calendar.png"
              alt="calendar"
              className="w-56 h-48 bg-left bg-no-repeat bg-origin-border bg-clip-border bg-contain"
            />
            <div className="mt-2">
              <p className="ps-14 py-14 text-[#8BCA00] text-xl">Record your workout journey</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden flex flex-col items-center justify-center">
            <img
              src="/chart.png"
              alt="chart"
              className="w-56 h-48 bg-left bg-no-repeat bg-origin-border bg-clip-border bg-contain"
            />
            <div className="mt-2">
              <p className="ps-14 py-14 text-[#8BCA00] text-xl">Tracking your progress</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden flex flex-col items-center justify-center">
            <img
              src="/rafiki.png"
              alt="rafiki"
              className="w-56 h-48 bg-left bg-no-repeat bg-origin-border bg-clip-border bg-contain"
            />
            <div className="mt-2">
              <p className="ps-14 py-14 text-[#8BCA00] text-xl">A diversity of exercise modalities</p>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="flex flex-col items-center justify-center h-96 w-full bg-[#8BCA00] bg-cover bg-center p-8 text-white text-center font-poppins">
          <h2 className="text-2xl m-80 p-60 leading-loose">Discover a healthier, happier you with <strong>GreenSculpt</strong>. <br/>We offer a variety of workouts, personalized plans, and expert guidance to help you achieve your fitness goals.</h2>
        </div>
      </section>

      <section className="mb-60">
        <div className="container mx-auto py-12 flex justify-center items-center font-poppins flex-col text-center">
          <p className="text-3xl font-bold text-[#8BCA00]">Join GreenSculpt Today</p>
          <p className="text-2xl font-bold py-8 text-center text-[#8BCA00] leading-loose px-40 mx-60">Unlock exclusive access to premium features and personalized workout plans. Sign up now and take the first step towards a healthier lifestyle.</p>
          <a href="#" className="bg-[#D2FE71] hover:bg-[#D2FE71] text-black font-bold py-4 px-28 rounded">Sign Up</a>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-center h-60 w-full bg-[#8BCA00] bg-cover bg-center text-white text-center font-poppins">
        <div className="flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <span>|</span>
          <a href="#" className="text-white">About Us</a>
          <span>|</span>
          <a href="#" className="text-white">Workouts</a>
          <span>|</span>
          <a href="#" className="text-white">Membership</a>
          <span>|</span>
          <a href="#" className="text-white">Blog</a>
          <span>|</span>
          <a href="#" className="text-white">Contact Us</a>
        </div>

        <div className="mt-4 flex py-4 space-x-4">
          <a href="#" className="text-white">
            <img src="/facebook.png" alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="#" className="text-white">
            <img src="/twitter.png" alt="Twitter" className="h-6 w-6" />
          </a>
          <a href="#" className="text-white">
            <img src="/instagram.png" alt="Instagram" className="h-6 w-6" />
          </a>
        </div>
        
        <div>
          <p className="text-white py-8">© 2024 GreenSculpt. All rights reserved.</p>
        </div>
      </footer>

    </>
  );
};

export default LandingPage;
