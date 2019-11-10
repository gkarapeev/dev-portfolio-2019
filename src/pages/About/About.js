import React, { Fragment } from 'react'
import Titlebar from '../../components/Titlebar/Titlebar'
import PageContent from '../../components/PageContent/PageContent'
import Paper from '../../components/Paper/Paper'
import Document from '../../components/Document/Document'
import Card from '../../components/Card/Card'
import './About.css'

import images from '../../img_index/images'
import CV_PDF from '../../documents/Georgi_Karapeev_CV_November_2019.pdf'

const Skills = (props) => {
  return (
    <Fragment>
      <Titlebar name={props.name} />
      <PageContent>
        <section>
          <Paper bg='white' classes={['aboutCard']}>
            <img src={images.contact.Georgi} id='Georgi' alt='Georgi Karapeev' />
            <h2>Hi, I'm Georgi,</h2>

            <p>
              <span className='b'>and I'm here to make a statement.</span> I can't impress you with years of programming behind my back, but I can certainly do that with my dedication, enthusiasm, and bulletproof work ethic.
            </p>
            <p>
              Here is my proposition: have a look at my portfolio and <span className='b'>pick a one-week challenge for me which you DOUBT I'd be able to pull off</span>. Anything - pick a discipline which you don't even see in my stack. Give me a week and let me show you that "results-oriented" is not just a phrase I can write down.
            </p>
            <p>
              Even if I fail, we both win, so don’t delay, call today!
            </p>
          </Paper>
        </section>

        <section>
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
        </section>
      </PageContent>
    </Fragment>
  )
};

export default Skills;