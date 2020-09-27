import React, { Component } from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: null,
      hour: '00',
      min: '00',
      sec: '00',
      val: '00:00:00',
      startFlag: true,
    };
  }

  start = () => {
    this.state.store = setInterval(() => {
      this.setState({
        startFlag: false,
      });
      if (this.state.sec > 0) {
        this.setState({
          sec: this.state.sec - 1,
        });
      } else if (this.state.min > 0) {
        this.setState({
          min: this.state.min - 1,
          sec: 59,
        });
      } else if (this.state.hour > 0) {
        this.setState({
          hour: this.state.hour - 1,
          min: 59,
        });
      } else {
        clearInterval(this.state.store);
        alert('Time Up!');
      }
    }, 1000);
  };
  restart = () => {
    clearInterval(this.state.store);
    this.setState({
      startFlag: true,
      sec: '00',
      min: '00',
      hour: '00',
      val: '00:00:00',
    });
  };
  stop = () => {
    this.setState({ startFlag: true });
    clearInterval(this.state.store);
  };

  handleTimer = (time, timeString) => {
    console.log(timeString);
    let arr = timeString.split(':');
    this.setState({
      val: timeString,
      hour: arr[0],
      min: arr[1],
      sec: arr[2],
    });
  };

  render() {
    return (
      <div className="container text-center">
        <h1>Timer</h1>
        <div className="mb-4">
          <TimePicker
            value={moment(this.state.val, 'HH:mm:ss')}
            onChange={this.handleTimer}
          />
          <h1>
            {this.state.hour} : {this.state.min} : {this.state.sec}
          </h1>
        </div>
        <div>
          <div className="output display-1"></div>
          <button
            type="button"
            className="btn btn-warning mx-3 reset"
            onClick={this.restart}
          >
            Reset
          </button>

          {this.state.startFlag ? (
            <button
              type="button"
              className="btn btn-success mx-3 start"
              onClick={this.start}
            >
              Start
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-danger mx-3 stop"
              onClick={this.stop}
            >
              Stop
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Timer;
