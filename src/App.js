import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
constructor() {
  super();
  this.updateTime = this.updateTime.bind(this);
}

state = {
  date: undefined,
  day: undefined,
  year: undefined,
  month: undefined
}

updateTime() {
   this.setState({date: (new Date()).toLocaleTimeString()});
   this.setState({day: new Date().getDate()});
   this.setState({year: new Date().getFullYear()});
   this.setState({month: new Date().getMonth()});
}

componentWillMount() {
  this.timer = setInterval(this.updateTime, 1000);
  this.updateTime();
}

componentWillUnmount() {
   clearInterval(this.timer);
}

  render() {
    return (
      <div className="App">
        <div className="clock">{this.state.date}</div>
        <div className="clock">{this.state.month}/{this.state.day}/{this.state.year}</div>
      </div>
    );
  }
}

