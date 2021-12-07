import "./Bartender.scss";
import Taps from "../helpers/Taps/Taps";
import React from "react";
import TimeToClose from "../helpers/TimeToClose/TimeToClose";
import OrderList from "../helpers/OrderList/OrderList";

function Keg(props) {
  return (
    <li>
      <div className={props.amount <= 2 ? (props.amount < 2 ? "light turn-on" : "light half") : "light"}></div>
      {props.name}: {props.amount} left
    </li>
  );
}

function Depot(props) {
  const kegs = props.storage.map((keg, i) => <Keg key={(i < 9 ? "keg0" : "keg") + (i + 1)} {...keg} />);
  return (
    <section className="Depot">
      <h2>Inventory</h2>
      <ul>{kegs}</ul>
    </section>
  );
}

export default function Bartender(props) {
  if (!props.taps) {
    return null;
  }

  return (
    <div className="Bartender Layout">
      <TimeToClose now={props.now} isHappyHour={props.isHappyHour} setIsHappyHour={props.setIsHappyHour} />
      <Taps bartenders={props.bartenders} taps={props.taps} />
      <Depot {...props} />
      <OrderList {...props} />
    </div>
  );
}
