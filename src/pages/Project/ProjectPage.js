import React, {Fragment } from 'react'
import PageContent from '../../components/PageContent/PageContent'
import Titlebar from '../../components/Titlebar/Titlebar'
import Document from '../../components/Document/Document'
import './ProjectPage.css'
import TechBox from '../../components/TechBox/TechBox'
import ExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel'
import project_list from '../../projects/project_list'

const ProjectPage = (props) => {
  const thisProject = project_list.filter(project => project.title.match(props.name))[0]
  const ProjectPic = thisProject.projectPic
  return(
    <Fragment>
      <Titlebar name={props.name} />
      <PageContent>
        <div className='projectPicContainer'>
          <Document content={ProjectPic} bg='white' target='_blank' classes={['projectDoc']} address={'https://www.google.bg'} hoverMsg='Open project in new tab'/>
          <p className='projectDescription'>
            {thisProject.description}
          </p>
        </div>
        <h2 className='snippetTitle'>
          Technology used in this project
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