// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimerRunning: true})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="card-container">
          <div className="img-para-container">
            <img
              className="time-img"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="para">Timer</p>
          </div>
          <h1 className="timer">{time}</h1>
          <div className="button-container">
            <button
              className="start-btn"
              type="button"
              onClick={this.onStartTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              className="stop-btn"
              type="button"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              className="reset-btn"
              type="button"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
