import React from 'react'
import { Link } from 'react-router-dom'
import './DocumentLink.css'
import Paper from '../Paper/Paper'


const DocumentLink = (props) => {
  return(
    <Paper bg={props.bg} classes={'doc docLink'}>
      <Link to={props.path}>
        <div className='docMask'>
          <span>{props.hoverMsg}</span>
        </div>
        <img src={props.content} alt={props.alt} className='docLinkImg'/>
      </Link>
    </Paper>
  )
};

export default DocumentLink;