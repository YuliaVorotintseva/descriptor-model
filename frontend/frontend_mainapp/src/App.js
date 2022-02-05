import React from 'react'
import {connect} from 'react-redux'
import {Route, Routes, Navigate, withRoute, BrowserRouter} from 'react-router-dom'

import Layout from './hoc/Layout'
import Auth from './containers/auth/Auth'
import Logout from './components/logout/Logout'
import Home from './components/home/Home'
import {autoLogin} from './store/actions/Auth'

class App extends React.Component {
  componentDidMount() {
    this.props.autoLogin()
  }

  render() {
    let routes = (
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/' element={<Home />} />
      </Routes>
    )

    if(this.props.isAuthenticated) {
      routes = (
        <Routes>
          <Route path='/logout' element={<Logout />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      )
    }

    return (
      <Layout>
        <BrowserRouter>
          {routes}
        </BrowserRouter>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({isAuthenticated: !!state.auth.token})
export default connect(mapStateToProps, {autoLogin})(App)