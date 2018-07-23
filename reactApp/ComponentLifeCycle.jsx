import React from 'react'

class ComponentLifeCycle extends React.Component {
    constructor() {
        super()
        this.state = {
            data: 0
        }
        this.updateNumber = this.updateNumber.bind(this)
    }

    updateNumber() {
        var number = this.state.data
        this.setState({
            data: number + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.updateNumber}>Update Number </button>
                <Content myNumber={this.state.data} />
            </div>
        )
    }

}
class Content extends React.Component {
    componentWillMount() {
        console.log('compoent will mount')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS! ')
        console.log(newProps)
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    render() {
        return (
            <div>
                <h4> {this.props.myNumber} </h4>
            </div>
        )
    }
}

export default ComponentLifeCycle