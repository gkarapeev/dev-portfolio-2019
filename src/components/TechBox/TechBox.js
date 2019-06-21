import React from 'react'
import './TechBox.css'
import images from '../../img_index/images';

const TechBox = (props) => {
  return(
    <div className='techBox'>
      {props.stack.map((technology, index) => {
        return (
          <img src={images.icons[technology]} key={index} alt={technology} />
        )
      })}
    </div>
  )
};

export default TechBox;