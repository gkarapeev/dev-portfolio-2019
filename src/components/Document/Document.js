import React from 'react'
import Paper from '../Paper/Paper'
import './Document.css'
import Mask from '../Mask/Mask'


const Document = (props) => {
  const docClasses = ['doc']
  const classes = props.classes ? props.classes.concat(docClasses) : docClasses

  return (
    <a href={props.address} target={props.target} className='masked' rel='noopener noreferrer'>
      <Paper bg={props.bg} classes={classes}>
        <img src={props.content} alt={props.alt} className='docImg' />
        <Mask hoverMsg={props.hoverMsg} />
      </Paper>
    </a>
  )
};

export default Document;