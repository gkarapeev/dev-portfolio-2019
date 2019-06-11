import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import routes from '../../routes'
import './Header.css'
import logo from '../../img/logo.svg'

const Header = (props) => {
  return (
    <div>
      <header>
        <div className="headerBG">
          <div className="headerContent">
            <Link to={'/'} id="brandLink">
              <img id="brand" src={logo} alt="brand" />
            </Link>
            <nav>
              <ul>
                {routes.map((route, linkIndex) => {
                  return (
                    <li key={linkIndex}>
                      <NavLink to={route.path} activeClassName='activeNav'>
                        <span>{route.name}</span>
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
};

export default Header;