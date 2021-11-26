import "./Bartender.scss";
import Taps from "../helpers/Taps/Taps";
import React from "react";

function TimeToClose(props) {
  const date = new Date(props.time);
  return (
    <p>
      {22 - Number(date.toString().split(" ")[4].split(":")[0])}:{60 - Number(date.toString().split(" ")[4].split(":")[1])}:{60 - Number(date.toString().split(" ")[4].split(":")[2])}
    </p>
  );
}

export default function Bartender(props) {
  return (
    <div className="Bartender">
      <Taps bartenders={props.bartenders} taps={props.taps} />
      <TimeToClose time={props.time} />
    </div>
  );
}
