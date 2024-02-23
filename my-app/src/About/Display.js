import React from 'react'
import"./Display.css"
const Display = () => {
  return (
    <div className='display'>
        <img src="./pexels-cottonbro-studio-3993293.jpg" alt="non-exist"className='displayimage' />
        <div className="content"><p className="displayhead">Have a date with us to transform you to be the cuttest in town</p>
        <button  className='displaybtn'>Book Now</button></div>
    </div>
  )
}

export default Display