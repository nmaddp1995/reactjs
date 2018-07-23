import React from 'react'
import '.././style.css'
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css'
import PopupStudentDetail from './PopupStudentDetail.jsx'
import PopupTeacherDetail from './PopupTeacherDetail.jsx'
class PopupDetail extends React.Component {
    constructor(props) {
      super(props)
      this.state = this.props.data
    }
    
    render() {
      return (
        <div>
          {this.props.data.isTeacher ? <PopupTeacherDetail data={this.state} handleLogin={this.props.handleLogin} 
            showPopupSignUpAgain = {this.props.showPopupSignUpAgain}
            />
            : <PopupStudentDetail data={this.state} handleLogin={this.props.handleLogin} 
            showPopupSignUpAgain={this.props.showPopupSignUpAgain} 
            />}
        </div>
      )
    }
  }

export default PopupDetail