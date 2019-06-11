import React, { Fragment } from 'react'
import './Skills.css'
import Titlebar from '../../components/Titlebar/Titlebar'
import PageContent from '../../components/PageContent/PageContent'
import ExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel'

import skillList from './skill_list'

const Skills = (props) => {
  return (
    <Fragment>
      <Titlebar location={props.location} />
      <PageContent>
        {skillList.map((skill, skillIndex) => {
          return (
            <ExpansionPanel
              title={skill.title}
              snippet={skill.snippet}
              key={skillIndex}
            />
          )
        })}
      </PageContent>

    </Fragment>
      )
    };
    
export default Skills;