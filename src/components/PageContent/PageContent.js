import React from 'react'
import './PageContent.css'

const PageContent = (props) => {
  return(
    <div className='contentContainer'>
      {props.children}
    </div>
  )
};

export default PageContent;