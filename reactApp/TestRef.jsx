import React from 'react'

class TestRef extends React.Component {
    constructor(props) {
        super(props);

        this.textInput = React.createRef();
        this.textInput2 = React.createRef();

        this.handle = this.handle.bind(this)
    }
    handle() {
        console.log(this.textInput.current.value)
        console.log(this.textInput2.current.value)
    }
    render() {
        return (
            <div>
                <input ref={this.textInput} />
                <input ref={this.textInput2} />
                <button onClick = {this.handle}  > Click </button>
            </div>
        )
    }
}

export default TestRef