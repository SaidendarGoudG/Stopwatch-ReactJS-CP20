import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeInSec: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onClickReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeInSec: 0})
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)

    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeInSec: prevState.timeInSec + 1,
    }))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)

    this.setState({isTimerRunning: true})
  }

  getSecondsInTimeFormat = () => {
    const {timeInSec} = this.state

    const minutes = Math.floor(timeInSec / 60)
    const seconds = Math.floor(timeInSec % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="time-icon-container">
              <img
                className="stopwatch-icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <h1 className="timer">Timer</h1>
            </div>
            <h1 className="time">{this.getSecondsInTimeFormat()}</h1>
            <div className="buttons-container">
              <button
                className="common-button bg-color-green"
                onClick={this.onClickStart}
                disabled={isTimerRunning}
                type="button"
              >
                Start
              </button>
              <button
                className="common-button bg-color-red"
                onClick={this.onClickStop}
                type="button"
              >
                Stop
              </button>
              <button
                className="common-button bg-color-yellow"
                onClick={this.onClickReset}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
