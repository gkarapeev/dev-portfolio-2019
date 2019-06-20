import React from 'react'
import './Paper.css'

const Paper = (props) => {
  const classes = props.classes ? props.classes.join(' ') : null

  return(
    <div className={'paper ' + props.bg + ' ' + classes}>
      {props.children}
    </div>
  )
};

export default Paper;