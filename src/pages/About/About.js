import React, { Fragment } from 'react'
import Titlebar from '../../components/Titlebar/Titlebar'
import PageContent from '../../components/PageContent/PageContent'
import Paper from '../../components/Paper/Paper'
import './About.css'

import Georgi from '../../img/georgi-karapeev.jpg'
import Bubble from '../../img/bubble.svg'
import PhoneIcon from '../../img/phone.svg'
import MailIcon from '../../img/mail.svg'
import GitIcon from '../../img/gh_c.svg'
import InIcon from '../../img/in_c.svg'

const Skills = (props) => {
  return (
    <Fragment>
      <Titlebar name={props.name} />
      <PageContent>
        <div className='hello'>
          <img src={Georgi} className='Georgi' alt='Georgi Karapeev' />
          <div className='bubbleCont'>
            <img src={Bubble} alt={'Hi, I\'m Georgi'} />
            <h2>Hi, I'm Georgi!</h2>
          </div>
        </div>
        <Paper bg='white' classes={['aboutCard']}>
          <h2>About me</h2>
          <p>
            When I wrote my first-ever JavaScript function in January 2019, I had no idea how much of a blast programming would turn out for me. Since then I’ve kept working hard day in, day out, and I’m now super excited to be able to make this website in ReactJS and take my carreer as a software developer to the next level.
          </p>
          <p>
            I’m looking forward to working on some real-life projects with teams and clients and learning more about backend programming so that I can make full, dynamic, and modern websites from start to finish.
          </p>
          <p>
            If you think I can help your business or team grow bigger and stronger, don’t hesitate to get in touch!
          </p>
        </Paper>
        <Paper bg='white' classes={['contactCard']}>
          <div className='contactInfo'>
            <div className='contactRow'>
              <div className='iconBG'>
                <img src={PhoneIcon} alt='phone' />
              </div>
              <span>+359 884010777</span>
            </div>
            <div className='contactRow'>
              <div className='iconBG'>
                <img src={MailIcon} alt='e-mail' />
              </div>
              <span>gkarapeev@gmail.com</span>
            </div>
            <div className='contactRow'>
              <div className='iconBG'>
                <img src={GitIcon} alt='GitHub' />
              </div>
              <span>github.com/gkarapeev</span>
            </div>
            <div className='contactRow'>
              <div className='iconBG'>
                <img src={InIcon} alt='LinkedIn' />
              </div>
              <span>linkedin.com/in/gkarapeev</span>
            </div>
          </div>
          <div className='cvBox'>
            <div className='cv'>
              CV
            </div>
          </div>
        </Paper>
      </PageContent>
    </Fragment>
  )
};

export default Skills;