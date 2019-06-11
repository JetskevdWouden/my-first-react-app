import React, {Component} from 'react'

export default class Clock extends Component {
    state = {time: new Date()}

    componentDidMount(){            //kick-off timer once // start component or do an action only once //called immediatley after ocmponent is mounted
        this.setNewTime()
    }

    setNewTime() {
        this.timerID = setInterval(() => this.tickTock(), 1000);
    }

    oldTimer() {
        clearInterval(this.timerID);
    }

    tickTock() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return(
            <div>
                <h2>The Time is:</h2>
                <span id="hours">{this.state.time.getHours()}: </span>
                <span id="minutes">{this.state.time.getMinutes()}: </span>
                <span id="seconds">{this.state.time.getSeconds()}</span>
            </div>
        )
    }
}