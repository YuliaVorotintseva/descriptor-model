import React from 'react'
import styleClasses from './Auth.module.css'
import is from 'is_js'
import { connect } from 'react-redux'
import { auth } from '../../store/actions/Auth'

class Auth extends React.Component {
  state = {
    isFormValid: false,
    formControls: {...this.props.formControls}
  }

  authHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      this.props.isAuthorized
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
    console.log(event.target.value)
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

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <div class="field">
          <label class="label">{controlName}</label>
          <div class="control">
            <input
              class="input"
              key={controlName + index}
              type={control.type}
              value={control.value}
              valid={control.valid}
              touched={control.touched}
              label={control.label}
              errorMessage={control.errorMessage}
              shouldValidate={!!control.validation}
              onChange={event => this.onChangeHandler(event, controlName)}
            />
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className={styleClasses.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form class="box" onSubmit={this.submitHandler}>
            {this.renderInputs()}

            <button
              class="button is-primary"
              onClick={this.authHandler}
              disabled={!this.state.isFormValid}
            >
              {this.props.authStatus}
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { auth })(Auth)