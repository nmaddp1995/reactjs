import React from 'react'

class LoginCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            isLogin: false
        }
        this.loginClick = this.loginClick.bind(this)
        this.logoutClick = this.logoutClick.bind(this)
    }
    loginClick() {
        this.setState({
            isLogin: true
        })
    }
    logoutClick() {
        this.setState({
            isLogin: false 
        })
    }

    render() {
        let button 
        if(!this.state.isLogin) {
            button = <button onClick = {this.loginClick}> Login </button>

        } else {
            button = <button onClick = {this.logoutClick}> Logout </button>
        }
        return (
            <div>
               <h1> {this.state.isLogin == true ? 'Welcome back' : 'Login Please'} </h1>
               {button}
            </div>
        )
    }
}

export default LoginCheck