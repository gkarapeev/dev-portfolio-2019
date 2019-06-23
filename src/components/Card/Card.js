import React from 'react'
import './Card.css'


const Card = (props) => {
  const classes = props.classes ? props.classes.join(' ') : null

  return(
    <div className={props.classes ? 'card ' + classes : 'card'}>
      {props.children}
    </div>
  )
};

export default Card;