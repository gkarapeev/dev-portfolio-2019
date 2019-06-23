import React, { Fragment } from 'react'
import Titlebar from '../../components/Titlebar/Titlebar'
import PageContent from '../../components/PageContent/PageContent'
import DocumentLink from '../../components/Document/DocumentLink'
import './Portfolio.css'
import Projects from '../../projects/projects'

const Skills = (props) => {
  return (
    <Fragment>
      <Titlebar name={props.name} />
      <PageContent>
        <section>
          <div className='projectContainer'>
            <ul>
              {Projects.map((proj, index) => {
                return (
                  <li key={index}>
                    <DocumentLink bg='white' content={proj.thumb} path={proj.path} alt={proj.title} hoverMsg='View Project'/>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </PageContent>
    </Fragment>
  )
};

export default Skills;