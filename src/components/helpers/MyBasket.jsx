import "./MyBasket.scss";
import { useState, useEffect } from "react";
import Checkout from "./Checkout";
import ModalYourID from "./ModalYourID";
import Button from "./Button";
import Title from "./Title";

export default function MyBasket(props) {
  const [showResults, setShowResults] = useState(false);
  const [newAmount, setNewAmount] = useState(0);
  const [isModalYourID, setIsModalYourID] = useState(false);
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
  // console.log(payload);
  const orders = basket.map((order, i) => (
    <li className="addedItem" key={i}>
      <Button className="deleteItem" name={order.name} onClick={noBeer} label="X" />
      {order.amount} {order.name} ${order.price()}
      <div className="actions">
        <div className="amountWrapper">
          <Button name={order.name} onClick={handleClickMinus} label="-" />
          <input type="number" min="1" max="100" onInput={oneMore} data-name={order.name} value={order.amount} />
          <Button name={order.name} onClick={handleClickPlus} label="+" />
        </div>
      </div>
    </li>
  ));

  function noBeer(e) {
    const productName = e.currentTarget.dataset.name;
    props.deleteBeer(productName);
  }

  function oneMore(e) {
    const beerValue = e.currentTarget.value;
    const productName = e.currentTarget.dataset.name;

    setNewAmount(beerValue);
    props.addMoreBeer(Number(beerValue), productName);
    // console.log(newAmount, productName);
  }

  function handleClickPlus(e) {
    // console.log(props.id);
    const productName = e.currentTarget.dataset.name;
    props.increaseAmount(productName);
  }

  function handleClickMinus(e) {
    // console.log(props.id);
    const productName = e.currentTarget.dataset.name;
    props.decreaseAmount(productName);
  }

  return (
    <div className="MyBasket">
      <Title label="Your beers" />
      <ul>{orders}</ul>
      <div className="totalOrder">
        <p>{total} items</p>
        <p>
          Total: <span> ${sum}</span>
        </p>
      </div>
      {orders.length > 0 && (
        <div>
          <Button onClick={onClick} label="Checkout" />
          {showResults ? (
            <Checkout resetBasket={props.resetBasket} payload={payload} addID={props.addID} customerName={props.customerName} setCustomerName={props.setCustomerName} setIsModalYourID={setIsModalYourID} setShowResults={setShowResults} />
          ) : null}
        </div>
      )}
      {isModalYourID && <ModalYourID ordersID={props.ordersID} setIsModalYourID={setIsModalYourID} />}
    </div>
  );
}
