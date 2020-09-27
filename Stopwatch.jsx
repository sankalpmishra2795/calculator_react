import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      min: 0,
      sec: 0,
      store: null,
      startFlag: true,
    };
  }
  start = () => {
    this.store = setInterval(() => {
      return this.setState({
        startFlag: false,
        sec: this.state.sec == 60 ? 0 : this.state.sec + 1,
        min: this.state.sec == 60 ? this.state.min + 1 : this.state.min,
      });
    }, 1000);
  };

  stop = () => {
    this.setState({ startFlag: true });
    clearInterval(this.store);
  };
  restart = () => {
    clearInterval(this.store);
    return this.setState({
      sec: 0,
      min: 0,
    });
  };
  render() {
    return (
      <div class="container text-center">
        <h1>Stop Watch</h1>
        <div className=" display-2">
          {this.state.min + ':' + this.state.sec}
        </div>
        <div>
          <div class="output display-1"></div>
          <button
            type="button"
            class="btn btn-warning mx-3 reset"
            onClick={this.restart}
          >
            Reset
          </button>

          {this.state.startFlag ? (
            <button
              type="button"
              class="btn btn-success mx-3 start"
              onClick={this.start}
            >
              Start
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-danger mx-3 stop"
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

export default Stopwatch;
