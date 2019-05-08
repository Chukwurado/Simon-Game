import React from "react";
import "./styles.css";

function Pad(props) {
  const classes = "square " + props.className;

  return <div id={props.id} className={classes} onClick={props.onClick} />;
}

export default Pad;
