import React, { Fragment } from 'react'
import './cv.css'
import Titlebar from '../../components/Titlebar/Titlebar'
import PageContent from '../../components/PageContent/PageContent'


const Skills = (props) => {
  return (
    <Fragment>
      <Titlebar name={props.name} />
      <PageContent>
        CV Content
      </PageContent>

    </Fragment>
      )
    };
    
export default Skills;