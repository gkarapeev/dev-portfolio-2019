import React, {Fragment } from 'react'
import PageContent from '../../components/PageContent/PageContent'
import Titlebar from '../../components/Titlebar/Titlebar'
import Document from '../../components/Document/Document'
import Paper from '../../components/Paper/Paper'
import './ProjectPage.css'
import TechBox from '../../components/TechBox/TechBox'
import ExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel'
import Button from '../../components/Button/Button'
import BackArrow from '../../img/BackArrow'
import projects from '../../projects/projects'

const ProjectPage = (props) => {
  const thisProject = projects.filter(project => project.title.match(props.name))[0]
  const ProjectPic = thisProject.projectPic

  return(
    <Fragment>
      <Titlebar name={props.name} />
      <PageContent>
        <section>
          <div className='projectPicContainer'>
            {thisProject.url ?
              <Document content={ProjectPic} bg='white' target='_blank' classes={['projectDoc']} address={thisProject.url} hoverMsg={thisProject.url.match(/\bgitlab\b|\bgithub\b/) ? 'View project in GitHub': 'Open demo in new tab'}/>
              :
              <Paper bg='white' classes={['doc', 'projectDoc']}>
                <img src={ProjectPic} className='docImg' alt={thisProject.title} />
              </Paper>
            }
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
        </section>

        {thisProject.snippets ? (
          <section id='snippetSection'>
            <h2 className='snippetTitle'>
              Some code snippets from this project
            </h2>
            {thisProject.snippets.map((snippet, index) => {
              return (
                <ExpansionPanel title={snippet.title} snippet={snippet.code} key={index} />
              )
            })}
          </section>)
          : null
        }

        {thisProject.stack ? (
          <section>
            <h2 className='snippetTitle'>
              Tech stack used in this project
            </h2>
            <TechBox stack={thisProject.stack} />
          </section>)
          : null
        }

        <section>
          <div className='buttonCont'>
            <Button to='/portfolio'>
              <BackArrow />
              Back to all projects
            </Button>

          {thisProject.gitHubLink ? (
            <a href={thisProject.gitHubLink} className='button' target={'_blank'} rel="noopener noreferrer">
              View this project on GitHub
            </a>)
            : null
          }
          </div>
        </section>
      </PageContent>
    </Fragment>
  )
};

export default ProjectPage;