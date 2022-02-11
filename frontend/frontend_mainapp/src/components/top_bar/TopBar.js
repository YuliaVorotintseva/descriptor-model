import React from 'react'
import './TopBar.module.css'

const TopBar = props => {
  const renderButtons = () => {
    return Object.keys(props.buttons).map((buttonName, index) => {
      const button = props.buttons[buttonName]
      return (
        <a href={button.ref} class="button is-link">
          {button.authStatus}
        </a>
      )
    })
  }

  return (
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="home.png" />
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a href='/' class="navbar-item">Home</a>
          <a href='/documentation' class="navbar-item">Documentation</a>

          {
            props.isAuthenticated
            ? <a href='/load' class="navbar-item">Load docs</a>
            : null
          }

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>
            <div class="navbar-dropdown">
              <a href='/about' class="navbar-item">About</a>
              <a href='/contacts' class="navbar-item">Contacts</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              {renderButtons()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopBar