import React, { Component } from "react";
import Pad from "./pad.js";

class Board extends Component {
  renderPad(color, i) {
    return (
      <Pad
        id={color}
        className={this.props.background[i]}
        onClick={() => this.props.onClick(color, i)}
      />
    );
  }
  render() {
    return (
      <div className="board">
        {this.renderPad("red", 0)}
        {this.renderPad("blue", 1)}
        {this.renderPad("orange", 2)}
        {this.renderPad("green", 3)}
      </div>
    );
  }
}

export default Board;
