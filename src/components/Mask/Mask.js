import React from 'react'
import './Mask.css'

const Mask = (props) => {
  return(
    <div className='mask'>
      <div className='maskInfo'>
        {props.children}
        {props.hoverMsg ? <span className='hoverMsg'>{props.hoverMsg}</span> : null}
      </div>
    </div>
  )
};

export default Mask;