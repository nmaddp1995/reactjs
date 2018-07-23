import React from 'react'

class AppWithKey extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    name: 'Duc',
                    age: 18
                },
                {
                    name: 'Hien',
                    age: 20
                },
                {
                    name: 'Mai',
                    age: 18
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.data.map((item, id) => {
                        return <Content data = {item} key = {id} />
                    })}
                </div>
            </div>
            
        )
    }
}
class Content extends React.Component {
    render(){
        return (
            <div>
                <h4>Name: {this.props.data.name}, age: {this.props.data.age} </h4>
            </div>
        )
    }
}
export default AppWithKey