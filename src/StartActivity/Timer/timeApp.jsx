import './timeApp.css'
//import Settings from './Settings'
import SettingsContext from './SettingsContext'
import Timer from './Timer'
import { useState } from 'react'

//set default timer
const initialHours = 1;
const initialMinutes = 30;
const initialTimeInMinutes = initialHours * 60 + initialMinutes;

function timeApp() {
  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(initialTimeInMinutes);

  return (
  <main>
    
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

export default timeApp
