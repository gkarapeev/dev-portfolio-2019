import React, { Fragment } from 'react'
import './cv.css'
import Titlebar from '../../components/Titlebar/Titlebar'
import PageContent from '../../components/PageContent/PageContent'
import CV_PDF from '../../documents/Georgi_Karapeev_CV_November_2019.pdf'
import images from '../../img_index/images'
import Paper from '../../components/Paper/Paper'


const Skills = (props) => {
  return (
    <Fragment>
      <Titlebar name={props.name} />
      <PageContent>
        <section>
          <div className='cvCont'>
            <a href={CV_PDF} target='_blank' rel='noopener noreferrer'>
              <Paper bg='white' classes={['cvLarge']}>
                <img src={images.contact.CV} alt='CV' />
              </Paper>
            </a>
            <a href={CV_PDF} target='_blank' rel='noopener noreferrer'>
              <Paper bg='white' classes={['cvLarge']}>
                <img src={images.contact.CV2} alt='CV' />
              </Paper>
            </a>
          </div>
        </section>
        <section id='cvDownload'>
          <a href={CV_PDF} className='button' target='_blank' rel='noopener noreferrer'>
            Download CV
          </a>
        </section>
      </PageContent>
    </Fragment>
  )
};

export default Skills;