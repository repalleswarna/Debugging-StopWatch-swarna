// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {elapsedTimeInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.setTimerId)
  }

  onClickStart = () => {
    this.setTimerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(prevState => ({
      elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 1,
    }))
  }

  clearTimer = () => clearInterval(this.setTimerId)

  onClickStop = () => {
    this.clearTimer()
  }

  onClickReset = () => {
    this.clearTimer()
    this.setState({elapsedTimeInSeconds: 0})
  }

  render() {
    const {elapsedTimeInSeconds} = this.state
    const mins = Math.floor(elapsedTimeInSeconds / 60)
    const secs = Math.floor(elapsedTimeInSeconds % 60)
    const minsFormatted = mins > 9 ? mins : `0${mins}`
    const secsFormatted = secs > 9 ? secs : `0${secs}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer">
            <div className="timer-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="stopwatch">
              {minsFormatted}:{secsFormatted}
            </h1>
            <div className="buttons-container">
              <button
                className="start-button"
                type="button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                className="stop-button"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="reset-button"
                type="button"
                onClick={this.onClickReset}
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
