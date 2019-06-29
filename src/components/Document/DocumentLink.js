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
      <Mask hoverMsg={props.hoverMsg} tags={props.tags} title={props.title} >
        <h1>
          {props.thumbTitle ? props.thumbTitle : props.title}
        </h1>
        <div className='h-Divider'></div>
        <div className='tagBox'>
          {props.tags.map((tag, index) => {
            return (
              <span className='tag' key={index}>{tag}</span>
            )
          })}
        </div>
      </Mask>
    </Link>
  )
};

export default DocumentLink;