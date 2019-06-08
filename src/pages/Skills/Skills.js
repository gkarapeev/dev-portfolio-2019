import React, { Fragment } from 'react'
import './Skills.css'
import Titlebar from '../../components/Titlebar/Titlebar'
import PageContent from '../../components/PageContent/PageContent'
import ExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel'

const skillList = [
  {
    title: 'REST API & HTTP Requests',
    snippet: 'Code will go here...'
  },
  {
    title: 'JWT Authentication & Protected Routes',
    snippet:
`import React from 'react';
import { Route, Redirect } from "react-router-dom";
import * as jwt_decode from 'jwt-decode';
    
const PrivateRoute = (props) => {

  const { component: Component, ...rest } = props;

  const token = window.localStorage.getItem('token');
  let valid = false;

  if (token) {
    const now = new Date();
    const expiry = new Date(jwt_decode(token).exp * 1000);
    valid = token && (expiry > now);

    if (!valid) {
      console.log('Token is present, but expired.')
    }
  }

  return (
    <Route {...rest} render={(props) => (valid ? <Component {...props} /> : <Redirect to='/login' />)} />
  )
}

export default PrivateRoute;`
  },
  {
    title: 'Translating a Design Document into a working web UI',
    snippet: 'Code will go here...'
  },
]

const Skills = (props) => {
  return (
    <Fragment>
      <Titlebar location={props.location} />
      <PageContent>
        <div className='exPanelContainer'>
          {skillList.map((skill, skillIndex) => {
            return (
              <ExpansionPanel
                title={skill.title}
                snippet={skill.snippet}
                key={skillIndex}
              />
            )
          })}
        </div>
      </PageContent>

    </Fragment>
      )
    };
    
export default Skills;