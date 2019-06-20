import React from 'react'
import './Mask.css'

const Mask = (props) => {
  return(
    <div className='mask'>
      <span>{props.hoverMsg}</span>
    </div>
  )
};

export default Mask;