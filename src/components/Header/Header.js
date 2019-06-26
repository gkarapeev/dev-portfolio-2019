import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import routes from '../../routes/routes'
import './Header.css'
import logo from '../../img/logo.svg'

const Header = (props) => {
  const [menuOn, toggleMenu] = useState(false)

  const navID = menuOn ? 'inside' : 'outside'

  return (
    <div>
      <header>
        <div className="headerBG">
          <div className="headerContent">
            <Link to={'/'} id="brandLink">
              <img id="brand" src={logo} alt="brand" />
            </Link>
            <nav id={navID}>
              <ul>
                {routes.map((route, linkIndex) => {
                  return (
                    <li key={linkIndex} onClick={() => toggleMenu(!menuOn)}>
                      <NavLink to={route.path} activeClassName='activeNav'>
                        <span>{route.name}</span>
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className='menuToggle' onClick={() => toggleMenu(!menuOn)}>
              <div className='sliceCont'>
                <div className='burgerSlice'></div>
                <div className='burgerSlice'></div>
                <div className='burgerSlice'></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
};

export default Header;