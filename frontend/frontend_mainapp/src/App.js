import React from 'react'
import Layout from './hoc/Layout'
import Home from './components/home/Home'
import Auth from './containers/auth/Auth'
import Logout from './components/logout/Logout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import { autoLogin } from './store/actions/Auth'

const loginProps = {
  authStatus: 'LOG IN',
  isAuthorized: true,
  formControls: {
    email: {
      value: '',
      type: 'email',
      label: 'email',
      errorMessage: 'Enter correct email',
      valid: false,
      touched: false,
      validation: {
        required: true,
        email: true
      }
    },
    password: {
      value: '',
      type: 'password',
      label: 'Password',
      errorMessage: 'Enter correct password',
      valid: false,
      touched: false,
      validation: {
        required: true,
        minLength: 6
      }
    }
  }
}

const registerProps = {
  authStatus: 'SIGN UP',
  isAuthorized: false,
  formControls: {
    firstname: {
      value: '',
      type: 'text',
      label: 'text',
      errorMessage: 'Enter your firstname',
      valid: false,
      touched: false,
      validation: {
        required: true,
        email: true
      }
    },
    lastname: {
      value: '',
      type: 'text',
      label: 'text',
      errorMessage: 'Enter your firstname',
      valid: false,
      touched: false,
      validation: {
        required: true,
        email: true
      }
    },
    ...loginProps.formControls
  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.autoLogin()
  }

  render() {
    let routes = (
      <Routes>
        <Route path='/login' element={<Auth {...loginProps} />} />
        <Route path='/register' element={<Auth {...registerProps} />} />
        <Route path='/' element={<Home />} />
      </Routes>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Routes>
          <Route path='/logout' element={<Logout />} />
          <Route path='/' element={<Home />} />
        </Routes>
      )
    }

    return (
      <Layout>
        <BrowserRouter>
          {routes}
        </BrowserRouter>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({ isAuthenticated: !!state.auth.token })

export default connect(mapStateToProps, { autoLogin })(App)