import './timeApp.css'
//import Settings from './Settings'
import SettingsContext from './SettingsContext'
import Timer from './Timer'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

// const { _id } = useParams();
// const [hour, setHour] = useState(0);
// // const [minute, setMinute] = useState();

// useEffect(() => {
//   const getData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/start-activity/${_id}`);
//       setHour(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   getData();
// }, [_id]);

// console.log('id From Front ' + getData());

// //set default timer
// const initialHours = hour;
// const initialMinutes = 30;
// const initialTimeInMinutes = initialHours * 60 + initialMinutes;

function TimeApp() {
  const { _id } = useParams();
  const [timerData, setTimer] = useState(0);
// const [minute, setMinute] = useState();

useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/start-activity/${_id}`);
      setTimer(response.data);
      console.log('Activity Data:', response.data);                 // Add this line to log the data

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getData();
}, [_id]);

//set default timer
const initialHours = timerData.hours;
const initialMinutes = timerData.minutes;
const initialTimeInMinutes = initialHours * 60 + initialMinutes;

  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(initialTimeInMinutes);

  return (
  <main className='timerMain'>
    
  <SettingsContext.Provider value={{
    showSettings,
    setShowSettings,
    workMinutes,
    setWorkMinutes,
  }}>
    
    {showSettings ? <Settings /> : <Timer/>}
    
    </SettingsContext.Provider>
   </main>
  )
}

export default TimeApp
