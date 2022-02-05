import React from 'react'
import {connect} from 'react-redux'
import {Route, Routes, Navigate} from 'react-router-dom'

import Layout from './hoc/Layout'
import Auth from './containers/auth/Auth'
import Logout from './components/logout/Logout'
import Home from './components/Home'
import {autoLogin} from './store/actions/Auth'

class App extends React.Component {
  componentDidMount() {
    this.props.autoLogin()
  }

  render() {
    let routes = (
      <Routes>
        <Route exact path='/auth' element={<Auth />} />
        <Navigate exact to='/' element={<Home />} />
      </Routes>
    )

    if(this.props.isAuthenticated) {
      routes = (
        <Routes>
          <Route exact path='/logout' element={<Logout />} />
          <Navigate exact to='/' />
        </Routes>
      )
    }

    return (
      <Layout>
        {routes}
      </Layout>
    )
  }
}

const mapStateToProps = state => ({isAuthenticated: !!state.auth.token})

export default connect(mapStateToProps, {autoLogin})(App)