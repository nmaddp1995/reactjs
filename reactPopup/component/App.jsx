import React from 'react'
import '.././style.css'
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css'
import PopupSignUp from './PopupSignUp.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      isShowPopupSignUp: false,
      firstName: '',
      isTeacher: false,
      isStudent: false
    };
    this.showPopupSignUp = this.showPopupSignUp.bind(this) 
    //show popup signup when click Sign up 
    this.logOut = this.logOut.bind(this) 
    this.handleLogin = this.handleLogin.bind(this) 
    // handle login when user click submit from popup privacy
  }

  handleLogin(data) {
    this.setState({
      isLogin: data.isLogin,
      isShowPopupSignUp: false,
      firstName: data.firstName,
      isTeacher: data.isTeacher,
      isStudent: data.isStudent
    })
  }
 
  showPopupSignUp() {
    this.setState({
      isShowPopupSignUp: true,
      firstName: '',
      isTeacher: false,
      isStudent: false
    });
  }
  logOut() {
    this.setState({
      isShowPopupSignUp: false,
      isLogin: false,
      firstName: '',
      isTeacher: false,
      isStudent: false
    })

  }
  render() {
    var welcomeText = ""
    if (this.state.isLogin) {
      welcomeText = (this.state.isTeacher ? "Welcome teacher " : "Welcome student ")
      welcomeText += this.state.firstName + ", "
    }
    // text when user login
    return (
      <div id="div-main">
        <div id="header">
          <div className="row" id = "header-row">
            {this.state.isLogin ? welcomeText + ' ' : null }
            {this.state.isLogin ? <a href="javascript:" onClick={this.logOut}> Logout </a>
              : <a href="javascript:" onClick={this.showPopupSignUp} className="sign-up-button" id="button-signup">Sign up</a>
            }
          </div>
        </div>
        {this.state.isShowPopupSignUp ?
          <PopupSignUp data={this.state} handleLogin={this.handleLogin}  />
          : null
        }
        
      </div>
    );
  }
};

export default App