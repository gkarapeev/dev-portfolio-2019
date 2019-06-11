import React, { Fragment } from 'react'
import Titlebar from '../../components/Titlebar/Titlebar'
import PageContent from '../../components/PageContent/PageContent'
import Paper from '../../components/Paper/Paper'
import './Contact.css'

const Skills = (props) => {
  return (
    <Fragment>
      <Titlebar location={props.location} />
      <PageContent>
        <Paper bg='white' classes={'test'}>
          This is Contact
        </Paper>
      </PageContent>
    </Fragment>
  )
};

export default Skills;