import React from 'react'
import './TopBar.module.css'

const TopBar = props => {
  const renderButtons = () => {
    return Object.keys(props.buttons).map((buttonName, index) => {
      const button = props.buttons[buttonName]
      return (
        <a href={button.ref} className="button is-link">
          {button.authStatus}
        </a>
      )
    })
  }

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="home.png" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href='/' className="navbar-item">Home</a>
          <a href='/documentation' className="navbar-item">Documentation</a>

          {
            props.isAuthenticated
            ? <a href='/load' className="navbar-item">Load docs</a>
            : null
          }

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>
            <div class="navbar-dropdown">
              <a href='/about' className="navbar-item">About</a>
              <a href='/contacts' className="navbar-item">Contacts</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {renderButtons()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopBar