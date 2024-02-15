import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Playbutton from "./playbutton";
import Pausebutton from "./Pausebutton";
//import SettingsButton from "../src/SettingsButton";
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";
import ReactSlider from 'react-slider';
import './slider.css'
import Modal from "./Modal";

const red = "#8BCA00";
const green = "#8BCA00";

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work'); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);
  
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    // function switchMode() {
    //   const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    //   const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

    //   setMode(nextMode);
    //   modeRef.current = nextMode;

    //   setSecondsLeft(nextSeconds);
    //   secondsLeftRef.current = nextSeconds;
    // }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      // if (secondsLeftRef.current === 0) {
      //   return switchMode();
      // }

      //if the timer is stop
      if (secondsLeftRef.current === 0) {
        clearInterval(interval);
  
        // Show the modal with a congratulations message
        setShowModal(true);
        setModalMessage('You have done a great job!!');
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  // const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
  // const percentage = Math.round(secondsLeft / totalSeconds * 100);

  // const hours = Math.floor(secondsLeft / 3600);
  // const minutes = Math.floor((secondsLeft % 3600) / 60);
  // let seconds = secondsLeft % 60;
  // if (seconds < 10) seconds = '0' + seconds;

  secondsLeftRef.current = secondsLeft;

  const percentage = Math.round(secondsLeft / (settingsInfo.workMinutes * 60 + settingsInfo.breakMinutes * 60) * 100);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  let seconds = secondsLeft % 60;
  
  // Add zero padding to hours, minutes, and seconds when their values are less than 10
  const formattedHours = ('0' + hours).slice(-2);
  const formattedMinutes = ('0' + minutes).slice(-2);
  const formattedSeconds = ('0' + seconds).slice(-2);
  
  let formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  //fix an error when the stopwatch has stopped and get -1:-1:-1 or NaN:NaN:NaN
  if (formattedTime == "-1:-1:-1") {
    formattedTime = "00:00:00"
  } else {
    if (isNaN(secondsLeft) || isNaN(settingsInfo.workMinutes) || isNaN(settingsInfo.breakMinutes)) {
      formattedTime = "00:00:00"
    }
  }

  return (
    <>
    <div>
      <CircularProgressbar
        value={percentage}
        // text={`${hours}:${minutes}:${seconds}`}
        text={formattedTime}
        styles={buildStyles({
          textColor: 'black',
          pathColor: mode === 'work' ? red : green,
          tailColor: 'rgba(255,255,255,.2)',
        })}
      />
        <div style={{marginTop:'20px'}}>
          
          {isPaused
            ? <Playbutton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
            : <Pausebutton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}
        </div>
        {/* <div style={{marginTop:'20px'}}>
          <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
        </div> */}

        {/* <div style={{textAlign:'left'}}>
          <label className="timerLabel">work time: {Math.floor(settingsInfo.workMinutes / 60)}:{settingsInfo.workMinutes % 60}:00</label>
          <ReactSlider
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={0}
            />
        </div> */}

      </div>
      
      <Modal isOpen={showModal} message={modalMessage} onClose={() => setShowModal(false)} />
      </>
    ); 
  }
 export default Timer;