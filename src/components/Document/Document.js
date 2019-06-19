import React from 'react'
import './Document.css'
import Paper from '../Paper/Paper'


const Document = (props) => {
  return(
    <Paper bg={props.bg} classes={'doc'}>
      <a href={props.address} target={props.target} rel='noopener noreferrer'>
        <div className='docMask'>
          <span>{props.hoverMsg}</span>
        </div>
        <img src={props.content} alt={props.alt} className='docImg'/>
      </a>
    </Paper>
  )
};

export default Document;