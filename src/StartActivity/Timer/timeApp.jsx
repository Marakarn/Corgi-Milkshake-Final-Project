import './timeApp.css'
//import Settings from './Settings'
import SettingsContext from './SettingsContext'
import Timer from './Timer'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

const [hour, setHour] = useState(0);
// const [minute, setMinute] = useState();
const { _id } = useParams();

useEffect(() => {
  const getData = async () => {
    console.log('id From Front ' + _id);
    const response = await axios.get(
      // `https://greensculpt.onrender.com/start-activity/${_id}`
      `http://localhost:3000/start-activity/${_id}`
    );
    setHour(response.data);
    // setMinute(response.data);
  };

  getData();
}, [_id]);
console.log('id From Front ' + getData());

//set default timer
const initialHours = hour;
const initialMinutes = 30;
const initialTimeInMinutes = initialHours * 60 + initialMinutes;

function TimeApp() {
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
