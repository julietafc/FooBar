// import "./Button.scss";

import React from "react";

export default function Subheading(props) {
  return (
    <h3 type={props.type} style={props.style}>
      {props.label}
    </h3>
  );
}
