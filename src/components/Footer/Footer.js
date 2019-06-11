import React from 'react'
import './Footer.css'
import linkedInIcon from '../../img/in.svg'
import gitHubIcon from '../../img/gh.svg'

const Footer = (props) => {
  return(
    <div className='footer'>
      <div className='footerContent'>
        <p>&copy; Georgi Karapeev 2019</p>
        <ul className='social-links'>
          <li>
            <a href='https://github.com/gkarapeev' target='_blank' rel="noopener noreferrer">
              <img src={gitHubIcon} alt='gitHub' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/gkarapeev/' target='_blank' rel="noopener noreferrer">
              <img src={linkedInIcon} alt='linkedIn' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Footer;