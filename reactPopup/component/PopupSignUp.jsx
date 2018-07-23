import React from 'react'
import '.././style.css'
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css'
import PopupDetail from './PopupDetail.jsx'
import Popup from "reactjs-popup";

class PopupSignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowPopupSignUp: true,
      isShowPopupDetail: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isTeacher: false,
      isStudent: false,
      isValidFirstName: false,
      isValidLastName: false,
      isValidEmail: false,
      isValidPassword: false,
      isClickSignUp: false
    }
    this.firstName = React.createRef()
    this.lastName = React.createRef()
    this.email = React.createRef()
    this.password = React.createRef()
    this.teacherOption = React.createRef()
    this.studentOption = React.createRef()

    //show popup detail when click next step
    this.showPopupDetail = this.showPopupDetail.bind(this) 
    // show popup signup when click last step from popup detail
    this.showPopupSignUpAgain = this.showPopupSignUpAgain.bind(this)
    // handle when user click outside the popup
    this.closeModal = this.closeModal.bind(this)
    
  }
 
  showPopupSignUpAgain(data) {
    var newState = {
      isShowPopupSignUp: true,
      isShowPopupDetail: false,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      isTeacher: data.isTeacher,
      isStudent: data.isStudent,
      isValidFirstName: false,
      isValidLastName: false,
      isValidEmail: false,
      isValidPassword: false,
      isClickSignUp: false
    }
    this.setState(newState)
  }
  
  showPopupDetail() {
    // get data from input form and validate
    let state = this.state
    state.isClickSignUp = true
    let firstName = this.firstName.current.value
    let lastName = this.lastName.current.value
    let email = this.email.current.value
    let password = this.password.current.value
    let isTeacher = false
    let isStudent = false
    if (this.teacherOption.current.checked) {
      isTeacher = true
    } else {
      isStudent = true
    }
    if (this.checkName(firstName)) state.isValidFirstName = true
    else state.isValidFirstName = false
    if (this.checkName(lastName)) state.isValidLastName = true
    else state.isValidLastName = false
    if (this.checkEmail(email)) state.isValidEmail = true
    else state.isValidEmail = false
    if (this.checkPassword(password)) state.isValidPassword = true
    else state.isValidPassword = false
    this.setState(state)
    if (state.isValidFirstName && state.isValidLastName && state.isValidEmail && state.isValidPassword) {
      //show popup detail when input form is true
      var newState = {
        isShowPopupSignUp: false,
        isShowPopupDetail: true,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        isTeacher: isTeacher,
        isStudent: isStudent
      }
      this.setState(newState)
    }
  }
  //validate name
  checkName(name) {
    if (name == '' || name.length > 40) {
      return false
    } else {
      return true
    }
  }
  //validate email
  checkEmail(email) {
    if (email == '') return false
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  //validate password
  checkPassword(password) {
    if (password == '') return false
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d$@$!%*?&]{8,}/
    return reg.test(password)
  }

  componentWillReceiveProps() {
    // handle when user click sign up again
    var newState = {
      isShowPopupSignUp: true,
      isShowPopupDetail: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isTeacher: false,
      isStudent: false,
      isValidFirstName: false,
      isValidLastName: false,
      isValidEmail: false,
      isValidPassword: false,
      isClickSignUp: false
    }
    this.setState(newState)
  }
  closeModal() {
    //handle when user click outside the popup
    var newState = this.state
    newState.isShowPopupSignUp = false
    this.setState(newState)
  }
 
  render() {
    var style = {
      fontSize: 26,
      marginBottom: 15
    };
    return (
      <div>
        <Popup  open={this.state.isShowPopupSignUp} 
                onClose={this.closeModal}
                >
          <div className="popup">
            <div id="div-popup-signup" className='popup_inner'>
              <h1 style={style} > Get started now! </h1>
              <form id="sign-up-form" name="signup-form">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-2">
                    <label name="First name"> First name </label>
                  </div>
                  <div className="col-md-4">
                    <input type="text" ref={this.firstName} defaultValue={this.state.firstName} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5"> </div>
                  <div className="col-md-7">
                    {!this.state.isValidFirstName && this.state.isClickSignUp ? <label className="error-label"> First Name can't be empty and has 40 chars max </label>
                      : null}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-2">
                    <label name="Last name"> Last name </label>
                  </div>
                  <div className="col-md-4">
                    <input type="text" ref={this.lastName} defaultValue={this.state.lastName} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5"> </div>
                  <div className="col-md-7">
                    {!this.state.isValidLastName && this.state.isClickSignUp ? <label className="error-label"> Last Name can't be empty and has 40 chars max </label>
                      : null}
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-2">
                    <label name="Email"> Email </label>
                  </div>
                  <div className="col-md-4">
                    <input type="text" ref={this.email} defaultValue={this.state.email}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5"> </div>
                  <div className="col-md-7">
                    {!this.state.isValidEmail && this.state.isClickSignUp ? <label className="error-label"> Email invalid </label>
                      : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-2">
                    <label name="Password"> Password </label>
                  </div>
                  <div className="col-md-4">
                    <input type="password" ref={this.password} defaultValue={this.state.password}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5"> </div>
                  <div className="col-md-7">
                    {!this.state.isValidPassword && this.state.isClickSignUp ? <label className="error-label"> Password must contain at least 1 lower case char 1 upper case char 1 number 1 special char (!@#$%) and at least 8 chars long  </label>
                      : null} 
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-2" id="div-account-type">
                    <label name="Role" > Account type </label>
                  </div>
                  <div className="col-md-2" >
                    <input type="radio" name="accountType" value="teacher" id='teacher' ref={this.teacherOption} defaultChecked={!this.state.isStudent}  /> Teacher
                  </div>
                  <div className="col-md-2">
                    <input type="radio" name="accountType" value="student" id='student' ref={this.studentOption} defaultChecked={this.state.isStudent}/> Student
            </div>
                </div>
                <div className="row">
                  <div className="col-md-6"> </div>
                  <div className="col-md-4">
                    <a href="javascript:" id="button-detail-step" onClick={this.showPopupDetail}> Next step </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Popup>
        <div >
          {this.state.isShowPopupDetail ?
            <PopupDetail data={this.state} handleLogin={this.props.handleLogin}
              showPopupSignUpAgain={this.showPopupSignUpAgain} 
              closePopup={this.props.closePopup}/>
            : null
          }
        </div>
      </div>
    );
  }
}

export default PopupSignUp