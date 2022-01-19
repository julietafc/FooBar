// import "./Button.scss";

import React from "react";

export default function Title(props) {
  return (
    <h2 type={props.type} style={props.style}>
      {props.label}
    </h2>
  );
}
