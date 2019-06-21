import React, {Fragment } from 'react'
import PageContent from '../../components/PageContent/PageContent'
import Titlebar from '../../components/Titlebar/Titlebar'
import Document from '../../components/Document/Document'
import './ProjectPage.css'
import project_list from '../../projects/project_list'

const ProjectPage = (props) => {
  const ProjectPic = project_list.filter(project => project.title.match(props.name))[0].projectPic
  console.log(ProjectPic)
  return(
    <Fragment>
      <Titlebar name={props.name} />
      <PageContent>
        <div className='projectPicContainer'>
          <Document content={ProjectPic} bg='purple' target='_blank' classes={['projectPic']} address={'https://www.google.bg'} hoverMsg='Open project in new tab'/>
        </div>
      </PageContent>
    </Fragment>
  )
};

export default ProjectPage;