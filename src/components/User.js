import React, {Component} from 'react'

export default class User extends Component {
    state = {active: true}

    toggle = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render () {
        return (<div>
            <p>User: <b>{this.props.name}</b></p>
            <p>{this.props.name} is {this.state.active ? '': <b>not</b>} present</p>
            <button onClick={this.toggle}>Toggle</button>
        </div>)
    }
}