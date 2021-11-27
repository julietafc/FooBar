import "./Bartender.scss";
import Taps from "../helpers/Taps/Taps";
import React from "react";
import TimeToClose from "../helpers/TimeToClose/TimeToClose";

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
      <TimeToClose now={props.now} />
      <Taps bartenders={props.bartenders} taps={props.taps} />
      <Depot {...props} />
    </div>
  );
}
