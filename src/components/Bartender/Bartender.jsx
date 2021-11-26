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

function Keg(props) {
  return (
    <li>
      {props.name}: {props.amount} left
    </li>
  );
}

function Depot(props) {
  const kegs = props.storage.map((keg, i) => <Keg key={(i < 9 ? "keg0" : "keg") + (i + 1)} {...keg} />);
  return (
    <section className="Depot">
      <ul>{kegs}</ul>
    </section>
  );
}

export default function Bartender(props) {
  return (
    <div className="Bartender">
      <TimeToClose time={props.time} />
      <Taps bartenders={props.bartenders} taps={props.taps} />
      <Depot {...props} />
    </div>
  );
}
