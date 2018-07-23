import React from 'react'

class Cha extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "1"
        }
        this.handleCon = this.handleCon.bind(this)
    }
    handleCon(data) {
        this.setState({
            data: data
        })
    }
    render() {
        return (
            <div>
                {this.state.data}
                <Con data={this.state.data} handleCon={this.handleCon} />
            </div>
        )
    }
    componentWillReceiveProps(){
        console.log("receive prop")
    }
}
class Con extends React.Component {
    constructor(props) {
        super(props)
        this.handleEvent = this.handleEvent.bind(this)
    }
    handleEvent() {
        // this.props.handleCon("ajkahsdfkjasdflk")
        // console.log(this.props)
    }
    render() {
        return(
            <div>
                <button type = "button" onClick = {this.handleEvent}> Test </button>
                <Con2 handleCon = {this.props.handleCon} />
            </div>
        )
    }
}

class Con2 extends React.Component {
    constructor(props){
        super(props)
        this.handleFromCon2 = this.handleFromCon2.bind(this)

    }

    handleFromCon2() {
        this.props.handleCon("123")
    }
    render() {
        return (
            <div>
                <button type="button" onClick = {this.handleFromCon2}> Handle From Con 2 </button>
                </div>
        )
    }

}
export default Cha