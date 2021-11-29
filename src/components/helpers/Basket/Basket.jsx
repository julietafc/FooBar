import "./Basket.scss";
import { useState } from "react";
import MyBasket from "../../MyBasket/MyBasket";
import Checkout from "../Checkout/Checkout";
export default function Basket(props) {
  return (
    <aside className="aside">
      <MyBasket addMoreBeer={props.addMoreBeer} basket={props.basket} />
    </aside>
  );
}

function Button(props) {
  return <button>Click Me</button>;
}
