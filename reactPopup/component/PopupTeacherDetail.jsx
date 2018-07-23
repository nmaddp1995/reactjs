import React from 'react'
import '.././style.css'
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import PopupPrivacy from './PopupPrivacy.jsx'
import Popup from "reactjs-popup"
class PopupTeacherDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowPopupSignUp: false,
      isShowPopupDetail: true,
      firstName: this.props.data.firstName,
      lastName: this.props.data.lastName,
      email: this.props.data.email,
      password: this.props.data.password,
      isTeacher: this.props.data.isTeacher,
      isStudent: this.props.data.isStudent,
      languageTeach: "",
      homeCountry: "",
      timeZone: "",
      birthYear: ""
    }
    this.languageTeach = React.createRef()
    this.homeCountry = React.createRef()
    this.timeZone = React.createRef()
    this.birthYear = React.createRef()
    //show popup signup when click last step
    this.showPopupSignUp = this.showPopupSignUp.bind(this)
    //show popup privacy when click nex step
    this.ShowPopupPrivacy = this.ShowPopupPrivacy.bind(this)
  }

  showPopupSignUp() {
    var newState = this.state
    newState.isShowPopupDetail = false
    newState.isShowPopupSignUp = true
    this.setState(newState)
    this.props.showPopupSignUpAgain(newState)
  }
  ShowPopupPrivacy() {
    let newState = this.state
    newState.isShowPopupDetail = false
    newState.isShowPopupPrivacy = true

    //get data from dropdown list
    let languageTeachOptions = this.languageTeach.current
    let homeCountryOptions =this.homeCountry.current
    let timeZoneOptions = this.timeZone.current
    let birthYearOptions = this.birthYear.current
    
    let languageTeach = languageTeachOptions.options[languageTeachOptions.selectedIndex].text
    let homeCountry = homeCountryOptions.options[homeCountryOptions.selectedIndex].text
    let timeZone = timeZoneOptions.options[timeZoneOptions.selectedIndex].text
    let birthYear = birthYearOptions.options[birthYearOptions.selectedIndex].text

    newState.languageTeach = languageTeach
    newState.homeCountry = homeCountry
    newState.timeZone = timeZone
    newState.birthYear = birthYear
    this.setState(newState)
  }
  //add year from 1975 to 2015 to dropdownlist birthyear
  componentDidMount() {
    var select = this.birthYear.current
    var options = []
    for (let i = 1975; i <= 2015; i++) {
      options.push(i)
    }
    select.innerHTML = ""
    for (var i = 0; i < options.length; i++) {
      var opt = options[i]
      select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>"
    }
  }

  render() {
    var style = {
      fontSize: 26,
      marginBottom: 15
    };
    return (

      <div>
        <Popup  open={this.state.isShowPopupDetail}>
                
          <div id="div-popup-teacher-detail">
            <h1 style = {style} >Welcome teacher {this.props.data.firstName} </h1>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <label name="Language teach"> Language teach </label>
              </div>
              <div className="col-md-4">
                <select ref={this.languageTeach}>
                  <option value="Javascript">Javascript</option>
                  <option value="C">C</option>
                  <option value="C++">C++</option>
                  <option value="Java">Java</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <label name="Home country"> Home country </label>
              </div>
              <div className="col-md-4">
                <select ref={this.homeCountry}>
                  <option value="Viet Nam">Viet Nam</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Singapore">Singapore</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <label name="Timezone">Timezone </label>
              </div>
              <div className="col-md-4">
                <select ref={this.timeZone}>
                  <option value="GMT+7">GMT+7</option>
                  <option value="GMT+6">GMT+6</option>
                  <option value="GMT+5">GMT+5</option>
                  <option value="GMT+4">GMT+4</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <label name="Birth year"> Birth year </label>
              </div>
              <div className="col-md-4">
                <select id="birth-year-select" ref={this.birthYear}>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-2">
                <a href="javascript:" onClick={this.showPopupSignUp} > Last step </a>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-2">
                <a href="javascript:" onClick={this.ShowPopupPrivacy}> Next step </a>
              </div>
            </div>
          </div>
        </Popup>
        <div >
          {this.state.isShowPopupPrivacy ?
            <PopupPrivacy data={this.state} handleLogin={this.props.handleLogin} />
            : null
          }
          
        </div>
        
      </div>
    )
  }
}
export default PopupTeacherDetail