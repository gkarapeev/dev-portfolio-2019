import React, { Fragment } from 'react'

const BackArrow = () => {

  const style = (
    `.arrowShape {
      fill: #ababab;
      transition: all 0.2s;
    }
    @keyframes bounce {
      0% {
        transform: translateX(0px);
      }
      50% {
      transform: translateX(-4px);
      }
      100% {
        transform: translateX(0px);
      }
    }
    .button:hover
    .arrowShape {
      fill: #ffffff;
      animation: bounce 1s infinite;
    }`
  )

  const code = (
    <svg version="1.1" id="arrow" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 14.9 23.9" >
    <style>
      {style}
    </style>
    <path className="arrowShape" d="M0,12c0,0.6,0.2,1.3,0.6,1.7l9.6,9.6c0.9,0.9,2.3,0.9,3.2,0l0.8-0.8c0.9-0.9,0.9-2.3,0-3.2L6.9,12l7.3-7.3
      c0.9-0.9,0.9-2.3,0-3.2l-0.8-0.8c-0.9-0.9-2.3-0.9-3.2,0l-9.6,9.6C0.2,10.7,0,11.3,0,12z"/>
    </svg>
  )

  return (
    <Fragment>
      {code}
    </Fragment>
  )
}

export default BackArrow;