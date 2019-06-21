import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import routes from './routes/routes'
import Projects from './projects/project_list'
import ProjectPage from './pages/Project/ProjectPage'

const projectRoutes = Projects.map(project => {
  return (
    {
      path: project.path,
      name: project.title,
      component: ProjectPage
    }
  )
})

const allRoutes = routes.concat(projectRoutes)

const hist = createBrowserHistory()

const App = () => {
  return (
    <Router history={hist}>
      <div className="App">
        <Header links={routes} />
        <div className="mainCont">
          <Switch>
            {allRoutes.map((route, index) => {
              return (
                <Route path={route.path} exact render={() => <route.component name={route.name} />} key={index} />
              )
            })}
            <Redirect from="/" to="/portfolio" />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
