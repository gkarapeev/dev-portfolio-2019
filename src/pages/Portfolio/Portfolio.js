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
      <div id='introCont'>
        <p className='intro'>Hi, I'm Georgi and I'm a frontend web software developer with React.</p>
        <p className='intro'>Everything you see here is done 100% individually by me, with the exception of 'Radix', which was a team project.</p>
        <p className='intro'><span className='b'>Be sure to check out the "About" page where I have a special offer for you!</span> :)</p>
      </div>
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