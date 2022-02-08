import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/footer/Footer'
import TopBar from '../components/top_bar/TopBar'

import styleClasses from './Layout.module.css'

const Layout = props => {
  return (
    <div className={styleClasses.Layout}>
      <main>
        <TopBar />
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