import React, { Fragment } from 'react'
import Titlebar from '../../components/Titlebar/Titlebar'
import PageContent from '../../components/PageContent/PageContent'
import Document from '../../components/Document/Document'
import './Portfolio.css'
import Projects from './projects/project_list'

const Skills = (props) => {
  return (
    <Fragment>
      <Titlebar location={props.location} />
      <PageContent>
        <div className='projectContainer'>
          {Projects.map((proj, index) => {
            return (
              <Document bg='white' content={proj.thumb} address='#' target='_self' alt={proj.title} key={index} hoverMsg='View Project'/>
            )
          })}
        </div>
      </PageContent>
    </Fragment>
  )
};

export default Skills;