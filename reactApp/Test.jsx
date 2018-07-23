import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }
    render() {
        return (
            <div>
                <div className='panel panel-default'>
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <form className='demoForm'>
                    <h2>Sign up</h2>
                    <div className='form-group'>
                        <label htmlFor='email'>Email address</label>
                        <input type="email" required className="form-control" name="email"
                            placeholder="Email"
                             onChange={this.handleUserInput} />
                    </div>
                    <div className='form-group'>
                        <label >Password</label>
                        <input type="email" required className="form-control" name="email"
                            placeholder="Email"
                            onChange={this.handleUserInput} />
                    </div>
                    <button type="submit" className="btn btn-primary"
                        disabled={!this.state.formValid}>Sign up 
                    </button>
                </form>
            </div>
        )
    }
}
class FormErrors extends Component {
    render() {
        var formErrors = this.props.formErrors
        return (
            <div className='formErrors'>
                {Object.keys(formErrors).map((fieldName, i) => {
                    if (formErrors[fieldName].length > 0) {
                        return (
                            <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                        )
                    } else {
                        return '';
                    }
                })}
            </div>
        )
    }
}

export default Test;
