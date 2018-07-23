import React from 'react'

class FormExample2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content: "Content",
            test:"test"
        }
        this.updateContent = this.updateContent.bind(this)
    }
    updateContent(e){
        this.setState({
            content: e.target.value
        })
        console.log(this.state)
    }
    componentDidMount(){
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <Content contentValue = {this.state.content}
                updateContentFunc = {this.updateContent} />
            </div>
        )
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <input type = "text" onChange = {this.props.updateContentFunc} value = {this.props.contentValue} />
                <h4> {this.props.contentValue} </h4>
            </div>
        )
    }
}
export default FormExample2