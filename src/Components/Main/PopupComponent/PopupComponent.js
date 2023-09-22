import React, { useRef } from 'react'
import './PopupComponent.css'
const PopupComponent = () => {

    const univRef = useRef();
    const programRef = useRef();

  return (
    <div className='popup-container'>
        <h2>Enter the details</h2>

       <input ref={univRef} type='text' placeholder='University Name'/>
       <input ref={programRef} type='text' placeholder='Program Name'/>

        <button>Apply Now</button>

    </div>
  )
}

export default PopupComponent