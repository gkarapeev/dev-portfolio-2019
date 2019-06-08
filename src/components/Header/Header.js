import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes';
import './Header.css'

const Header = (props) => {
  return (
    <div>
      <header>
        <div className="headerAccent"></div>
        <div className="headerBG">
          <div className="headerContent">
            <img id="brand" src="logo.svg" alt="brand" />
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