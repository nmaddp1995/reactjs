import React from 'react'
import ReactDOM from 'react-dom'
// import './style.css'
// import './node_modules/bootstrap/dist/css/bootstrap.min.css'
class ValidateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isValidFirstName: false,
            isValidLastName: false,
            isValidEmail: false,
            isValidPassword: false,
            isClickSignUp: false

        }
        this.showPopupDetail = this.showPopupDetail.bind(this)
    }
    showPopupDetail() {
        let state = this.state
        state.isClickSignUp = true 
        let firstName = ReactDOM.findDOMNode(this.refs.firstName).value
        let lastName = ReactDOM.findDOMNode(this.refs.lastName).value
        let email = ReactDOM.findDOMNode(this.refs.email).value
        let password = ReactDOM.findDOMNode(this.refs.password).value
        if(this.checkName(firstName)) state.isValidFirstName = true 
        else state.isValidFirstName = false 
        if(this.checkName(lastName)) state.isValidLastName = true 
        else state.isValidLastName = false
        if(this.checkEmail(email)) state.isValidEmail = true 
        else state.isValidEmail = false 
        if(this.checkPassword(password)) state.isValidPassword = true 
        else state.isValidPassword = false
        this.setState(state)
        console.log(state)
        if(state.isValidFirstName && state.isValidLastName && state.isValidEmail && state.isValidPassword) {
            alert("123")
        }
    }

    checkName(name) {
        if(name == '' || name.length > 40) {
            return false 
        } else {
            return true
        }
    }

    checkEmail(email) {
        if(email == '') return false 
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    checkPassword(password) {
        if(password == '') return false 
        else return true
    }

    render() {
        return (
            <div id="div-popup-signup">
                <h1> Get started now! </h1>
                <form id="sign-up-form" name="signup-form">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-1">
                            <label name="First name"> First name </label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" ref='firstName' required />
                        </div>
                        <div className="col-md-4">
                            {!this.state.isValidFirstName && this.state.isClickSignUp ? <label name="error first name" className = "error-label"> First Name can't be empty and has 40 chars max </label>
                            :null }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-1">
                            <label name="Last name"> Last name </label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" ref='lastName' required />
                        </div>
                        <div className="col-md-4">
                            {!this.state.isValidLastName && this.state.isClickSignUp ? <label name="error last name" className = "error-label"> Last Name can't be empty and has 40 chars max </label>
                            :null }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-1">
                            <label name="Email"> Email </label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" ref='email' required />
                        </div>
                        <div className="col-md-4">
                            {!this.state.isValidEmail && this.state.isClickSignUp ? <label name="error email" className = "error-label"> Email can't be empty and has 40 chars max </label>
                            :null }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-1">
                            <label name="Password"> Password </label>
                        </div>
                        <div className="col-md-3">
                            <input type="password" ref='password' required />
                        </div>
                        <div className="col-md-4">
                            {!this.state.isValidPassword && this.state.isClickSignUp ? <label name="error password" className = "error-label"> Password can't be empty and has 40 chars max </label>
                            :null }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-1">
                            <label name="Role"> Account type </label>
                        </div>
                        <div className="col-md-1">
                            <input type="radio" name="accountType" value="teacher" id='teacher' defaultChecked /> Teacher
            </div>
                        <div className="col-md-1">
                            <input type="radio" name="accountType" value="student" id='student' /> Student
          </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"> </div>
                        <div className="col-md-4">
                            <button id="button-detail-step" onClick={this.showPopupDetail} type="button"> Next step </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default ValidateForm