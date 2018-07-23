import React from 'react'
import '.././style.css'
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css'
import Popup from "reactjs-popup";
class PopupPrivacy extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.data
    this.cancelSignup = this.cancelSignup.bind(this)
    this.submitSignup = this.submitSignup.bind(this)
  }
  
  cancelSignup() {
    let state = this.state
    state.isShowPopupPrivacy = false
    let dataForHandleLogin = {
      isLogin: false,
      isShowPopupSignUp: false,
      firstName: '',
      isTeacher: false,
      isStudent: false
    };
    this.setState(state)
    this.props.handleLogin(dataForHandleLogin)
  }
  submitSignup() {
    let newState = this.state
    console.log(newState)
    newState.isShowPopupPrivacy = false
    let dataForHandleLogin = {
      isLogin: true,
      isShowPopupSignUp: false,
      firstName: newState.firstName,
      isTeacher: newState.isTeacher,
      isStudent: newState.isStudent
    };
    this.setState(newState)
    this.props.handleLogin(dataForHandleLogin)
  }
  render() {
    var privacyContent = 'Privacy is the ability of an individual or group to seclude themselves, or information about themselves,'
      + 'and thereby express themselves selectively. The boundaries and content of what is considered private differ among'
      + 'cultures and individuals, but share common themes. When something is private to a person, it usually means that'
      + 'something is inherently special or sensitive to them. The domain of privacy partially overlaps security'
      + '(confidentiality), which can include the concepts of appropriate use, as well as protection of information.'
      + 'Privacy may also take the form of bodily integrity.[1]'
      + 'The right not to be subjected to unsanctioned invasion of privacy by the government,'
      + 'corporations or individuals is part of many countries privacy laws, and in some cases, constitutions.'
      + 'All countries have laws which in some way limit privacy. An example of this would be law concerning taxation,'
      + 'which normally require the sharing of information about personal income or earnings. In some countries individual'
      + 'privacy may conflict with freedom of speech laws and some laws may require public disclosure of information which'
      + 'would be considered private in other countries and cultures. This was a major concern in the United States,'
      + 'with the Supreme Court passage of Citizens United.[citation needed]'
      + 'n or overlap between secrecy and privacy is ontologically subtle, which is why the word "privacy" '
      + 'is an example of an untranslatable lexeme,[6] and many languages do not have a specific word for "privacy". '
      + ' Such languages either use a complex description to translate the term (such as Russian combining the meaning of'
      + 'уединение—solitude, секретность—secrecy, and частная жизнь—private life) or borrow from English "privacy" '
      + '(as Indonesian privasi or Italian la privacy).[6] The distinction hinges on the discreteness of interests of '
      + 'parties (persons or groups), which can have emic variation depending on cultural mores of individualism, '
      + 'collectivism, and the negotiation between individual and group rights. The difference is sometimes expressed '
      + 'humorously as "when I withhold information, it is privacy; when you withhold information, it is secrecy.".'
    return (
      <div>
        <Popup open={this.state.isShowPopupPrivacy}>
        <div id="div-popup-privacy">
          <h1> Privacy and Terms </h1>
          <div id="div-privacy-content">
            <textarea rows="6" cols="50" defaultValue={privacyContent}>
            </textarea>
            <div className = "row">
            <div className ="col-md-4"></div>
            <div className = "col-md-1">
            <a href="javascript:" onClick={this.cancelSignup}> Cancel </a>
            </div>
            <div className ="col-md-2"></div>
            <div className = "col-md-1">
            <a href="javascript:" onClick={this.submitSignup}> Submit </a>
            </div>
            </div>
          </div>
        </div>
        </Popup>
      </div>
    )
  }
}
export default PopupPrivacy