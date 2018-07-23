import React from 'react'

class Prop extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.header} </h1>
                <h2> {this.props.content} </h2>
            </div>
        )
    }
}

Prop.defaultProps = {
    header: "This is header from default props",
    content: "This is content from deafault props"
}

export default Prop