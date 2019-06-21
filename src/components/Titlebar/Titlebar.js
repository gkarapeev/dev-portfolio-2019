import React from 'react'
import './Titlebar.css'

const Titlebar = (props) => {
  return(
    <div className='Titlebar'>
      <h1>{props.name}</h1>
    </div>
  )
};

export default Titlebar;