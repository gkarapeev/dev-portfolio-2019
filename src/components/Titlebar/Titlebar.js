import React from 'react'
import './Titlebar.css'

const Titlebar = (props) => {
  return(
    <div className='Titlebar'>
      <h1>{props.location.pathname.slice(1).charAt(0).toUpperCase() + props.location.pathname.slice(2)}</h1>
    </div>
  )
};

export default Titlebar;