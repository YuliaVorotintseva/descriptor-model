import React from 'react'
import { connect } from 'react-redux'
import is from 'is_js'

import styleClasses from './Auth.module.css'
import { auth } from '../../store/actions/Auth'

class Auth extends React.Component {
  state = {
    isFormValid: false,
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

  loginHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      true
    )
  }

  registerHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      false
    )
  }

  submitHandler = event => event.preventDefault()

  validateControl(value, validation) {
    if (!validation) return true

    let isValid = true
    if (validation.required) isValid = value.trim() !== '' && isValid
    if (validation.email) isValid = is.email(value) && isValid
    if (validation.minLength) isValid = value.length >= validation.minLength && isValid

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)
    formControls[controlName] = control

    let isFormValid = true
    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      isFormValid,
      formControls
    })
  }

  render() {
    return (
      <div className={styleClasses.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form class="box" onSubmit={this.submitHandler}>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="e.g. alex@example.com" />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" placeholder="********" />
              </div>
            </div>

            <button class="button is-primary" onClick={this.loginHandler} disabled={!this.state.isFormValid}>Sign up</button>
            <button class="button is-primary" onClick={this.registerHandler} disabled={!this.state.isFormValid}>Sign in</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { auth })(Auth)