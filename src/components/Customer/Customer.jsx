import "./Customer.scss";
import "../helpers/BeersMenu/BeersMenu.jsx";
import TimeToClose from "../helpers/TimeToClose/TimeToClose";
import React, { useEffect, useState } from "react";
import BeersMenu from "../helpers/BeersMenu/BeersMenu.jsx";

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
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const customerPage = document.querySelector(".Customer");
    const fullScreenElement = document.fullscreenElement;

    if (isFullScreen) {
      customerPage.requestFullscreen().catch((e) => {
        console.log(e);
      });
    } else if (fullScreenElement) {
      document.exitFullscreen();
    }
  }, [isFullScreen]);

  const readyMap = props.ordersReady.map((order) => order.id && <li key={order.id}>{order.id}</li>);

  return (
    <div className="Customer">
      <TimeToClose now={props.now} isHappyHour={props.isHappyHour} setIsHappyHour={props.setIsHappyHour} />
      <Beers {...props} />
      <BeersMenu products={props.products} />
      <aside>
        <h2>Orders Ready</h2>
        <ul className="orders-ready">{readyMap}</ul>
      </aside>
      <button id="fullscreen" onClick={() => setIsFullScreen(!isFullScreen)}>
        ◲
      </button>
    </div>
  );
}
