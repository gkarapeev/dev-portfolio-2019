import React, { Fragment } from 'react'
import Titlebar from '../../components/Titlebar/Titlebar'
import PageContent from '../../components/PageContent/PageContent'

const Skills = (props) => {
  return (
    <Fragment>
      <Titlebar location={props.location} />
      <PageContent>
        Portfolio content
      </PageContent>
    </Fragment>
  )
};

export default Skills;