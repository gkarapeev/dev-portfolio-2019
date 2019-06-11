import React from 'react'
import './Paper.css'

const Paper = (props) => {
  return(
    <div className={'paper ' + props.bg + ' ' + props.classes}>
      {props.children}
    </div>
  )
};

export default Paper;