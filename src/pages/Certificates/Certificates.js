import React, { Fragment } from 'react'
import Titlebar from '../../components/Titlebar/Titlebar'
import PageContent from '../../components/PageContent/PageContent'
import Document from '../../components/Document/Document'
import './Certificates.css'

import Degree from '../../img/Degree.png'
import Degree_PDF from '../../img/Degree.pdf'

import JS_Certificate from '../../img/JS_Certificate.png'
import JS_Certificate_PDF from '../../img/JS_Certificate.pdf'

import UX_Certificate from '../../img/UX_Certificate.png'
import UX_Certificate_PDF from '../../img/UX_Certificate.pdf'

const Skills = (props) => {
  return (
    <Fragment>
      <Titlebar location={props.location} />
      <PageContent>
        <div className='certificates'>
          <Document bg='beige' content={Degree} target='_blank' address={Degree_PDF} alt='Degree' hoverMsg='Open in new tab'/>
          <Document bg='white' content={JS_Certificate} target='_blank' address={JS_Certificate_PDF} alt='JS_Certificate' hoverMsg='Open in new tab'/>
          <Document bg='purple' content={UX_Certificate} target='_blank' address={UX_Certificate_PDF} alt='UX_Certificate' hoverMsg='Open in new tab'/>
        </div>
      </PageContent>
    </Fragment>
  )
};

export default Skills;