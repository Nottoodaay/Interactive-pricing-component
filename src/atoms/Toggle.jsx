import React from 'react'

import '../App.css'

export const Toggle = ({toggle, setToggle}) => {

    const toggleOnClick = () =>{
        setToggle(!toggle)
    }

  return (
    <>
    <label className="switch style-1" onChange={toggleOnClick}>
        <input type="checkbox" />
        <div className="toggler-slider" id="switcher">
            <div className="toggler-knob"></div>
        </div>
    </label>
    </>
  )
}
