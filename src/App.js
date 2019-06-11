import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import routes from './routes'

const hist = createBrowserHistory()

class App extends React.Component {

  state = {
    navLinks: [
      {
        name: 'Skills',
        active: true
      },
      {
        name: 'Certificates',
        active: false
      },
      {
        name: 'Examples',
        active: false
      },
      {
        name: 'Contact',
        active: false
      }
    ]
  }

  handleLinkClick = (linkIndex) => {
    const links = [...this.state.navLinks]

    const newLinks = links.map((link, index) => {
      return (
        {
          name: link.name,
          active: index === linkIndex
        }
      )
    })

    this.setState({ navLinks: newLinks })

  }

  render() {
    return (
      <Router history={hist}>
        <div className="App">
          <Header links={this.state.navLinks} click={this.handleLinkClick} />
          <div className="mainCont">
            <Switch>
              {routes.map((route, index) => {
                return (
                  <Route path={route.path} component={route.component} key={index} />
                )
              })}
              <Redirect from="/" to="/skills" />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
