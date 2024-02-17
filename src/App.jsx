import "./App.css";
// import Home from "./Home/Home";
import { useEffect } from "react";
import LandingPage from "./Landing/langing-page";

function App() {

  useEffect(() => {
    fetch('https://greensculpt.onrender.com/')
      .then(response => {
        console.log('Backend is up');
      })
      .catch(error => {
        console.error('Error pinging backend:', error);
      });
  }, []);
  
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
