import './timeApp.css'
//import Settings from './Settings'
import SettingsContext from './SettingsContext'
import Timer from './Timer'
import { useEffect, useState } from 'react'

function TimeApp({activity}) {

  const initialHours = activity.hours || 0; 
  const initialMinutes = activity.minutes || 0;
  const initialSeconds = activity.seconds || 0;
  const initialTimeInSeconds = initialHours * 3600 + initialMinutes * 60 + initialSeconds;  //convert all to seconds

  const initialTimeInMinutes = initialTimeInSeconds / 60;                 //convert seconds to miniute

  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(initialTimeInMinutes);
  const [breakMinutes, setBreakMinutes] = useState(0);

  console.log(workMinutes);

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
    
    {showSettings ? <Settings /> : <Timer activity={activity}/>}
    
    </SettingsContext.Provider>
   </main>
  )
}

export default TimeApp
