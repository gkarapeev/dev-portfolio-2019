import React, {Fragment } from 'react'
import PageContent from '../../components/PageContent/PageContent'
import Titlebar from '../../components/Titlebar/Titlebar'
import Document from '../../components/Document/Document'
import './ProjectPage.css'
import TechBox from '../../components/TechBox/TechBox'
import ExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel'
import projects from '../../projects/projects'

const ProjectPage = (props) => {
  const thisProject = projects.filter(project => project.title.match(props.name))[0]
  const ProjectPic = thisProject.projectPic
  return(
    <Fragment>
      <Titlebar name={props.name} />
      <PageContent>
        <div className='projectPicContainer'>
          <Document content={ProjectPic} bg='white' target='_blank' classes={['projectDoc']} address={'https://www.google.bg'} hoverMsg='Open project in new tab'/>
          <div className='descriptionCont'>
            <h2>
              About this project
            </h2>
            <p>
              {thisProject.description}
            </p>
            <h2>
              Key features
            </h2>
            <ul>
              {thisProject.features.map((feature, index) => {
                return (
                  <li key={index}>
                    {feature}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <h2 className='snippetTitle'>
          Tech stack used in this project
        </h2>
        <TechBox stack={thisProject.stack} />
        <h2 className='snippetTitle'>
          Some code snippets from this project
        </h2>
        {thisProject.snippets.map((snippet, index) => {
          return (
            <ExpansionPanel title={snippet.title} snippet={snippet.code} key={index} />
          )
        })}
      </PageContent>
    </Fragment>
  )
};

export default ProjectPage;