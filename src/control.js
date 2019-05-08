import React from "react";
import "./styles.css";

function Controls(props) {
  return (
    <button className="control-button" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Controls;
