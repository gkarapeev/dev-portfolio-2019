import React from 'react'
import './TechBox.css'
import Card from '../Card/Card'
import images from '../../img_index/images';

const TechBox = (props) => {
  return(
    <Card classes={['techBox']}>
      {props.stack.map((technology, index) => {
        return (
          <img src={images.icons[technology]} key={index} alt={technology} />
        )
      })}
    </Card>
  )
};

export default TechBox;