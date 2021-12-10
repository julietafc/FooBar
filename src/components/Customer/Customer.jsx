import "./Customer.scss";
import TimeToClose from "../helpers/TimeToClose/TimeToClose";
import React, { useEffect } from "react";

function Beers(props) {
  const allOrders = [...props.serving, ...props.queue];
  const displayBeers = allOrders.map(function (order) {
    // const style = {
    //   width: `${order.order.length * 10 + 50}px`,
    // };
    return <div key={order.id} className={"beerPx " + order.id}></div>;
  });
  return <section className="Beers">{displayBeers}</section>;
}

export default function Customer(props) {
  if (!props.taps) {
    return null;
  }

  useEffect(() => {
    document.querySelector("#fullscreen").addEventListener("click", () => {
      document
        .querySelector(".Customer")
        .requestFullscreen()
        .catch((e) => {
          console.log(e);
        });
    });
  });

  const readyMap = props.ordersReady.map((order) => order.id && <li key={order.id}>{order.id}</li>);

  return (
    <div className="Customer">
      <TimeToClose now={props.now} isHappyHour={props.isHappyHour} setIsHappyHour={props.setIsHappyHour} />
      <Beers {...props} />
      <aside>
        <h2>Orders Ready</h2>
        <ul className="orders-ready">{readyMap}</ul>
      </aside>
      <button id="fullscreen">◲</button>
    </div>
  );
}
