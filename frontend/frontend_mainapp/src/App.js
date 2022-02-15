import React from 'react'
import Layout from './hoc/Layout'
import Home from './components/home/Home'
import Auth from './containers/auth/Auth'
import Logout from './components/logout/Logout'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { autoLogin } from './store/actions/Auth'
import LoadFile from './components/load_file/LoadFile'
import Documentation from './components/documentation/Documentation'
import Contacts from './components/contacts/Contacts'
import About from './components/about/About'
import CreateModel from './components/create/CreateModel'

class App extends React.Component {
  loginProps = {
    ...this.props,
    authStatus: 'LOG IN',
    isAuthorized: true,
    authText: 'Авторизация',
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
  
  registerProps = {
    ...this.props,
    authStatus: 'SIGN UP',
    isAuthorized: false,
    authText: 'Регистрация',
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
      ...this.loginProps.formControls
    }
  }
  
  componentDidMount() {
    this.props.autoLogin()
  }

  render() {
    let routes = (
      <Routes>
        <Route path='/about' element={<About {...this.props} />} />
        <Route path='/contacts' element={<Contacts {...this.props} />} />
        <Route path='/documentation' element={<Documentation {...this.props} />} />
        <Route path='/login' element={<Auth {...this.loginProps} />} />
        <Route path='/register' element={<Auth {...this.registerProps} />} />
        <Route path='/' element={<Home {...this.props} />} />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Routes>
          <Route path='/about' element={<About {...this.props} />} />
          <Route path='/create' element={<CreateModel {...this.props} />} />
          <Route path='/contacts' element={<Contacts {...this.props} />} />
          <Route path='/documentation' element={<Documentation {...this.props} />} />
          <Route path='/logout' element={<Logout {...this.props} />} />
          <Route path='/load' element={<LoadFile {...this.props} />} />
          <Route path='/' element={<Home {...this.props} />} />
          <Route
            path='*'
            element={<Navigate to='/' />}
          />
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