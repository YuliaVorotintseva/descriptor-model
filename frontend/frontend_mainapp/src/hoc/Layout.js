import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/footer/Footer'
import TopBar from '../components/top_bar/TopBar'

import styleClasses from './Layout.module.css'

const Layout = props => {
  const unauthorizedProps = {
    ...props,
    buttons: {
      signup: {
        ref: '/register',
        authStatus: 'SIGN UP'
      },
      login: {
        ref: '/login',
        authStatus: 'LOG IN'
      },
    }
  }
  
  const authorizedProps = {
    ...props,
    buttons: {
      logout: {
        ref: '/logout',
        authStatus: 'LOG OUT'
      }
    }
  }

  let navbar = (
    <TopBar {...unauthorizedProps} />
  )

  if (props.isAuthenticated) {
    navbar = (
      <TopBar {...authorizedProps} />
    )
  }

  return (
    <div className={styleClasses.Layout}>
      <main>
        {navbar}
        {props.children}
        <Footer />
      </main>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

export default connect(mapStateToProps)(Layout)