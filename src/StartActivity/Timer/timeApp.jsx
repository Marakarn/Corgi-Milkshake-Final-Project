import './timeApp.css'
//import Settings from './Settings'
import SettingsContext from './SettingsContext'
import Timer from './Timer'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";


function TimeApp({activity}) {

  const initialHours = activity.hours; 
  const initialMinutes = activity.minutes ;
  const initialTimeInMinutes = initialHours * 60 + initialMinutes;
  
  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(initialTimeInMinutes);
  const [breakMinutes, setBreakMinutes] = useState(0);

  return (
  <main className='timerMain'>
    
  <SettingsContext.Provider value={{
    showSettings,
    setShowSettings,
    workMinutes,
    breakMinutes,
    setWorkMinutes,
    setBreakMinutes,
  }}>
    
    {showSettings ? <Settings /> : <Timer/>}
    
    </SettingsContext.Provider>
   </main>
  )
}

export default TimeApp
