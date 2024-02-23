import React from 'react'
import"./Phase1.css"
import { FaLongArrowAltRight } from "react-icons/fa";
const Phase1 = () => {
  return (
    <div className='phasehome'>  
    <img src="./pexels-thgusstavo-santana-2849402.jpg" alt="Not found" className="phase1image" />
   <div className="content"><h5 className="subtitle">With  William Kelly</h5><h2 className="title">Our Hair style makes your <br/>look elegance</h2>
   <h2 className="confirm">Get more confident</h2>
   <button className='appointment'>MAKE AN APPOINTMENT NOW  <FaLongArrowAltRight /></button></div> 
    
    </div>
  )
}

export default Phase1