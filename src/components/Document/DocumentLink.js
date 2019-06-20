import React from 'react'
import { Link } from 'react-router-dom'
import './DocumentLink.css'
import Paper from '../Paper/Paper'
import Mask from '../Mask/Mask'
import '../../components/Mask/Mask.css'


const DocumentLink = (props) => {
  const docLinkClasses = ['doc']
  const classes = props.classes ? props.classes.concat(docLinkClasses) : docLinkClasses

  return (
    <Link to={props.path} className='masked'>
      <Paper bg={props.bg} classes={classes}>
        <img src={props.content} alt={props.alt} className='docLinkImg'/>
      </Paper>
      <Mask hoverMsg={props.hoverMsg} />
    </Link>
  )
};

export default DocumentLink;