import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";
import Board from "./board.js";
import Controls from "./control.js";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasStarted: false,
      value: "Press to Start",
      background: Array(4).fill(null),
      gamePattern: [],
      userPattern: []
      // gameOver: false
    };
  }
  animateClickOrSeq(color, i) {
    let background = this.state.background.slice();
    background[i] = color;
    this.setState({
      background: background
    });

    setTimeout(() => {
      let background = this.state.background.slice();
      background[i] = null;
      this.setState({
        background: background
      });
    }, 250);
  }
  randomSequence() {
    let pattern = ["red", "blue", "orange", "green"];
    let randomNumber = Math.floor(Math.random() * 4);
    let gamePattern = this.state.gamePattern.slice();
    gamePattern.push(pattern[randomNumber]);
    this.setState({
      gamePattern: gamePattern,
      value: "Level " + (this.state.gamePattern.length + 1)
    });
    this.animateClickOrSeq(pattern[randomNumber], randomNumber);
  }
  check(i) {
    if (this.state.gamePattern[i] !== this.state.userPattern[i]) {
      let gamePattern = this.state.gamePattern.slice();
      let userPattern = this.state.userPattern.slice();
      gamePattern = [];
      userPattern = [];
      this.setState({
        gamePattern: gamePattern,
        userPattern: userPattern,
        hasStarted: false,
        value: "Game Over"
      });
    } else {
      if (i === this.state.gamePattern.length - 1) {
        let userPattern = this.state.userPattern.slice();
        userPattern = [];
        this.setState({
          userPattern: userPattern
        });
        setTimeout(() => {
          this.randomSequence();
        }, 1000);
      }
    }
  }
  handleClick(color, i) {
    if (this.state.hasStarted) {
      let userPattern = this.state.userPattern.slice();
      userPattern.push(color);
      this.setState({
        userPattern: userPattern
      });
      this.animateClickOrSeq(color, i);
    } else {
      this.setState({
        value: "Click ME!"
      });
    }
  }
  buttonClick() {
    if (!this.state.hasStarted) {
      this.setState({
        hasStarted: true
        //value: "Level " + (this.state.gamePattern.length + 1)
      });
      this.randomSequence();
    }
  }

  render() {
    if (this.state.hasStarted) {
      this.check(this.state.userPattern.length - 1);
    }
    return (
      <div className="app">
        <Board
          onClick={(color, i) => {
            this.handleClick(color, i);
          }}
          background={this.state.background}
        />
        <Controls value={this.state.value} onClick={() => this.buttonClick()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
