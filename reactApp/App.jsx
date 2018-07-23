import React from 'react'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: 
            [
                {
                    "id": 1,
                    "name": "Duc",
                    "age": "20"
                },
                {
                    "id": 2,
                    "name": "Hien",
                    "age": "23"
                },
                {
                    "id": 3,
                    "name": "Mai",
                    "age": "18"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <table>
                    <tbody>
                        {this.state.data.map((person) => 
                        <TableRow properties = {person} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> Learn ReactJS </h1>
            </div>

        )
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td> {this.props.properties.id} </td>
                <td> {this.props.properties.name} </td>
                <td> {this.props.properties.age} </td>
            </tr>
        )
    }
}
export default App