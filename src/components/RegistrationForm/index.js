import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    lastNameError: '',
    firstNameError: '',
    isNamesNotEmpty: true,
  }

  returnToForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      lastNameError: '',
      firstNameError: '',
      isNamesNotEmpty: true,
    })
  }

  renderFieldLevelValidations = () => {
    this.onBlurFirstName()
    this.onBlurLastName()
  }

  onLastName = event => {
    this.setState({
      lastName: event.target.value,
    })
  }

  onFirstName = event => {
    this.setState({
      firstName: event.target.value,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.renderFieldLevelValidations()
    const {lastName, firstName} = this.state
    if (lastName !== '' && firstName !== '') {
      this.setState({firstName, lastName, isNamesNotEmpty: false})
    }

    this.setState({firstName, lastName})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({
        firstNameError: 'Required',
      })
    } else {
      this.setState({
        firstNameError: '',
      })
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({
        lastNameError: 'Required',
      })
    } else {
      this.setState({
        lastNameError: '',
      })
    }
  }

  renderSuccess = () => {
    console.log('rendering the success')
    return (
      <div className="form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p>Submitted successfully</p>
        <button
          type="button"
          onClick={this.returnToForm}
          className="submit-button"
        >
          Submit Another Response
        </button>
      </div>
    )
  }

  renderForm = () => {
    const {lastName, firstName, lastNameError, firstNameError} = this.state

    const errorStyle = firstNameError ? 'name-input-error' : ''
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="input-formate">
          <label htmlFor="firstName" className="label-name">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            className={`${errorStyle} name-input`}
            onBlur={this.onBlurFirstName}
            onChange={this.onFirstName}
            value={firstName}
          />
          <p className="error-sms">{firstNameError}</p>
        </div>
        <div className="input-formate">
          <label htmlFor="lastName" className="label-name">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            className={`${errorStyle} name-input`}
            onBlur={this.onBlurLastName}
            onChange={this.onLastName}
            value={lastName}
          />
          <p className="error-sms">{lastNameError}</p>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  render() {
    console.log('this is an registration forms')
    const {isNamesNotEmpty} = this.state
    return (
      <div className="container">
        <h1 className="registration-head">Registration </h1>

        {isNamesNotEmpty ? this.renderForm() : this.renderSuccess()}
      </div>
    )
  }
}

export default RegistrationForm
