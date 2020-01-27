import React from 'react';
import io from 'socket.io-client';
import './App.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
let socket;
const ENDPOINT = 'localhost:5000';

class App extends React.Component {
  state = {
    count: '',
    amount: '',
    value: 0,
    message: null,
    color: "#0000FF"
  }
  componentDidMount() {
    this.socketInit();
    socket.on("newData", (data) => {
      this.setState({
        value: data.new,
        color: data.color
      })
    })
  }
  socketInit = () => {
    socket = io(ENDPOINT);
    socket.on('userCount', (data) => {
      console.log(data);
      this.setState({
        count: data.count
      })
    })
  }
  // doDecrement = () => {
  //   if (this.state.value) {
  //     this.setState({
  //       value: this.state.value - 1,
  //       message: null
  //     });
  //   } else {
  //     this.setState({
  //       message: "Can't decrement. Since 0 is the min value"
  //     });
  //   }
  // }
  doIncrement = () => {
    if (this.state.value < 1000) {
      this.setState({
        value: this.state.value + 25,
        message: null,
        color: '#004c00'
      });
      console.log(this.state.value);

    } else {
      this.setState({
        message: "Can't increment. Since 10 is the max value"
      });
    }
    this.Bidding();
  }
  Bidding = () => {
    socket.emit("data", { val: this.state.value + 25, color: "#FF0000" });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h3>User Count :{this.state.count}</h3>
        <CountdownCircleTimer
          key={this.state.value}
          isPlaying
          durationSeconds={5}
          colors={[
            [`${this.state.color}`, 1]
          ]}
        />
        <h3> Bidding Amount : {this.state.value}</h3>
        <button className="btn btn-danger px-4 mt-4" onClick={this.doIncrement} >BID</button>
      </div>
    );
  }
}

export default App;
