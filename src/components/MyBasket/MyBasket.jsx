import "./MyBasket.scss";
import { useState } from "react";

export default function MyBasket(props) {
  const [amount, setAmount] = useState(0);
  const initialValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price();
  }, initialValue);

  let total = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.amount;
  }, initialValue);

  const orders = props.basket.map((order, i) => (
    <li className="addedItem" key={i}>
      {order.amount} {order.name} ${order.price()}
      <div className="actions">
        <input type="number" />
        {/* <div className="amountWrapper">
          <input type="number" min="0" />
          <button onClick={decreaseAmount}>-</button>
          <p className="amount">{amount}</p>
          <button onClick={increaseAmount}>+</button>
        </div> */}

        {/* <Button /> */}
      </div>
    </li>
  ));

  function increaseAmount() {
    // console.log(props.id);
    setAmount((prevAmount) => prevAmount + 1);
  }
  function decreaseAmount() {
    // console.log(props.id);

    setAmount((prevAmount) => {
      if (prevAmount > 0) {
        return prevAmount - 1;
      }
      return 0;
    });
  }

  return (
    <div className="MyBasket">
      <h2>Your order</h2>
      <ul>{orders}</ul>
      <div className="totalOrder">
        <p>{total} items</p>
        <p>
          Total: <span> ${sum}</span>
        </p>
      </div>
    </div>
  );
}
