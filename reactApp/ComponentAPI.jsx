import React from 'react'
import ReactDOM from 'react-dom'
class ComponentAPI extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
        this.setStateHandler = this.setStateHandler.bind(this)
        // this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this)
    }
    setStateHandler() {
        var item = "Set State "
        var myArray = this.state.data.slice();
        myArray.push(item)
        this.setState({
            data: myArray
        })
    }
    forceUpdateHandler() {
        this.forceUpdate()
    }
    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv')
        ReactDOM.findDOMNode(myDiv).style.color = 'blue'
    }

    render() {
        return (
            <div>
                <button onClick = {this.setStateHandler}> SET STATE </button>
                <h4> State Array: {this.state.data} </h4>
                {/* <button onClick = {this.forceUpdateHandler}> Update State </button>
                <h4> Random Number: {Math.random()} </h4> */}
                <button onClick = {this.findDomNodeHandler}> Set State for DOM NODE </button>
                <div id = "myDiv"> DOM NODE </div>


            </div>
        )

    
    }
}

export default ComponentAPI