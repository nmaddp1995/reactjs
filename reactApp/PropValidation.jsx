import PropTypes from 'prop-types'
import React from 'react'

import ReactDOM from 'react-dom'

class PropValidation extends React.Component {
    render() {
        return (
            <div>
                <h1> Name: {this.props.name} </h1>
                <h3> PropBool: {this.props.propBool == true ? 'True' : 'False'} </h3>
                <h3> PropNumber: {this.props.propNumber} </h3>
                <h3> PropString: {this.props.propString} </h3>

            </div>
        )
        
    }
}

PropValidation.propTypes = {
    name: PropTypes.string,
    propBool: PropTypes.bool.isRequired,
    propNumber: PropTypes.number,
    propString: PropTypes.string

}
PropValidation.defaultProps = {
    name: 'Prop Validation',
    propBool: true,
    propNumber: 8,
    propString: "String value..."
}


export default PropValidation