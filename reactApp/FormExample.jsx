import React from 'react'

class FormExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "Initial data..."
        }
        this.updateContent = this.updateContent.bind(this)

    }
    updateContent(e) {
    
        this.setState({
            data: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type = "text" value = {this.state.data} 
                onChange = {this.updateContent} />
                <h4> {this.state.data} </h4>
            </div>
        )
    }
}

export default FormExample