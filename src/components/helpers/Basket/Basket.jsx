import "./Basket.scss";

import MyBasket from "../MyBasket/MyBasket";
export default function Basket(props) {
  return (
    <aside className="aside">
      <MyBasket decreaseAmount={props.decreaseAmount} increaseAmount={props.increaseAmount} addMoreBeer={props.addMoreBeer} basket={props.basket} />
    </aside>
  );
}
