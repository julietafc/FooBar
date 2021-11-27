import "./Bartender.scss";
import Taps from "../helpers/Taps/Taps";
import React from "react";
import counterClose from "../../modules/counterClose";

function TimeToClose(props) {
  const time = counterClose(props.now);
  const timeDisplay = `We close in ${time.hours} : ${time.minutes} : ${time.seconds}`;
  return <p>{time.hours < 0 ? "we are close" : timeDisplay}</p>;
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
      <TimeToClose now={props.now} />
      <Taps bartenders={props.bartenders} taps={props.taps} />
      <Depot {...props} />
    </div>
  );
}
