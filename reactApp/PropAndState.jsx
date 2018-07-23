import React from 'react'

class PropAndState extends React.Component {
    constructor() {
        super()
        this.state = {
            header: "Header from state",
            content: "Content from state"
        }
    }
    render() {
        return (
            <div>
                <Header headerProp = {this.state.header} />
                <Content contentProp = {this.state.content} />
            </div>

        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.headerProp} </h1>
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div> 
                <h2> {this.props.contentProp} </h2>
            </div>
        )
    }
}

export default PropAndState