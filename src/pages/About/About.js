import React, { Fragment } from 'react'
import Titlebar from '../../components/Titlebar/Titlebar'
import PageContent from '../../components/PageContent/PageContent'
import Paper from '../../components/Paper/Paper'
import Document from '../../components/Document/Document'
import Card from '../../components/Card/Card'
import './About.css'

import images from '../../img_index/images'
import CV_PDF from '../../documents/Georgi_Karapeev_CV_2019.pdf'

const Skills = (props) => {
  return (
    <Fragment>
      <Titlebar name={props.name} />
      <PageContent>

        <h2>About me</h2>

        <Paper bg='white' classes={['aboutCard']}>
          <img src={images.contact.Georgi} id='Georgi' alt='Georgi Karapeev' />
          <h2>Hi, I'm Georgi!</h2>

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

        <h2>Contact info</h2>

        <Card classes={['contactCont']}>
          <div className='infoCont'>
            <div className='contactRow'>
              <img src={images.contact.PhoneIcon} alt='Telephone' />
              <div className='contactItem'>
                <span>+359 884010777</span>
              </div>
            </div>
            <div className='contactRow'>
              <img src={images.contact.MailIcon} alt='Email' />
              <div className='contactItem'>
                <a href='mailto:gkarapeev@gmail.com' target='_blank' rel="noopener noreferrer"><span>gkarapeev@gmail.com</span></a>
              </div>
            </div>
            <div className='contactRow'>
              <img src={images.contact.GitIcon} alt='GitHub' />
              <div className='contactItem'>
                <a href='http://www.github.com/gkarapeev' target='_blank' rel="noopener noreferrer"><span>github.com/gkarapeev</span></a>
              </div>
            </div>
            <div className='contactRow'>
              <img src={images.contact.InIcon} alt='LinkedIn' />
              <div className='contactItem'>
                <a href='http://www.linkedin.com/in/gkarapeev' target='_blank' rel="noopener noreferrer"><span>linkedin.com/in/gkarapeev</span></a>
              </div>
            </div>
          </div>
          <div id='divider'></div>
          <Document bg='white' content={images.contact.CV} classes={['cv']} target='_blank' address={CV_PDF} alt='Download CV' hoverMsg='Download CV' />
        </Card>
      </PageContent>
    </Fragment>
  )
};

export default Skills;