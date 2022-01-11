import "./Button.scss";

import React from "react";

export default function Button(props) {
  return (
    <button type={props.type} data-name={props.name} data-sort-direction={props.direction} data-sort={props.sort} className={props.className} onClick={props.onClick} onMouseDown={props.onMouseDown} style={props.style}>
      {props.label}
    </button>
  );
}
