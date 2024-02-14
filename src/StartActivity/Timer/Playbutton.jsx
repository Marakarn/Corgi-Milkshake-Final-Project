import React from 'react'
import './timeApp.css';

function playbutton(props) {
  return (


                      <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000]" {...props} >
                        <span className="material-symbols-outlined text-[#000000]">
                          play_circle
                        </span>
                        Start
                      </button>
   
  )
}

export default playbutton