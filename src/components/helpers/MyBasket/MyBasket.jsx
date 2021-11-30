import "./MyBasket.scss";
import { useState } from "react";
import Checkout from "../Checkout/Checkout";

export default function MyBasket(props) {
  const [amount, setAmount] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [newAmount, setNewAmount] = useState(0);
  const onClick = () => setShowResults(true);
  const initialValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price();
  }, initialValue);

  let total = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.amount;
  }, initialValue);

  const basket = [...props.basket].filter((element) => element.amount > 0);
  const payload = basket.map((item) => {
    const order = {
      amount: item.amount,
      name: item.name,
    };
    return order;
  });
  console.log(payload);
  const orders = basket.map((order, i) => (
    <li className="addedItem" key={i}>
      {order.amount} {order.name} ${order.price()}
      <input type="number" min="1" max="100" onInput={oneMore} data-name={order.name} value={order.amount} />
      {/* <div className="actions">
        <div className="amountWrapper">
          <button onClick={decreaseAmount}>-</button>
          <p className="amount">{amount}</p>
          <button onClick={oneMore}>+</button>
        </div>


      </div> */}
    </li>
  ));

  function oneMore(e) {
    const newAmount = e.currentTarget.value;
    const productName = e.currentTarget.dataset.name;

    setNewAmount(newAmount);
    props.addMoreBeer(newAmount, productName);
    // console.log(newAmount, productName);
  }

  // function increaseAmount() {
  //   // console.log(props.id);
  //   setAmount((prevAmount) => prevAmount + 1);
  // }
  // function decreaseAmount() {
  //   // console.log(props.id);

  //   setAmount((prevAmount) => {
  //     if (prevAmount > 0) {
  //       return prevAmount - 1;
  //     }
  //     return 0;
  //   });
  // }

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
      {props.basket.length > 0 && (
        <div>
          <button onClick={onClick}>Checkout</button>
          {showResults ? <Checkout payload={payload} /> : null}
        </div>
      )}
    </div>
  );
}
