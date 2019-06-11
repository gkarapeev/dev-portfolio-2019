import React from 'react'
import './Document.css'
import Paper from '../Paper/Paper'


const Document = (props) => {
  return(
    <Paper bg={props.bg} classes={'doc'}>
      <a href={props.pdf} target='_blank'>
        <div className='docMask'>
          <span>Open in new tab</span>
        </div>
        <img src={props.content} alt={props.alt} className='docImg'/>
      </a>
    </Paper>
  )
};

export default Document;