import "./Product.scss";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function Product(props) {
  const [flipped, setFlipped] = useState(false);
  const [amount, setAmount] = useState(0);

  function increaseAmount() {
    // console.log(props.id);
    setAmount((prevAmount) => prevAmount + 1);
    // setEnabled((isEnabled = amount > 0));
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

  function handleClick() {
    setFlipped((flipped) => !flipped);
  }

  function add() {
    props.addToBasket({
      amount: amount,
      price: function () {
        return props.price() * this.amount;
      },
      name: props.name,
    });
    setAmount(0);
  }

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <article className="Product">
        <button className="moreInfo" onClick={handleClick}>
          Info
        </button>

        <div className="mainInfo">
          <img src={"./assets/" + props.label} alt="" />
          <div className="text">
            <p>
              {props.category} | {props.alc}%
            </p>
            <h3>{props.name}</h3>
            <div className="money">
              <img src="/assets/coin.svg" alt="" />
              <p className="price">${props.price()}</p>
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="amountWrapper">
            <button onClick={decreaseAmount}>-</button>
            <p className="amount">{amount}</p>
            <button onClick={increaseAmount}>+</button>
          </div>

          <button className="buttonAdd" onClick={add} style={amount < 1 ? { backgroundColor: "grey", pointerEvents: "none" } : { backgroundColor: "blue", pointerEvents: "all" }}>
            Add
          </button>
        </div>
      </article>
      <div className="ProductReverse">
        <button className="reverseCard" onClick={handleClick}>
          X
        </button>
        <p>
          <strong>Aroma: </strong>
          {props.description.aroma}
        </p>
        <p>
          <strong>Flavor: </strong>
          {props.description.flavor}
        </p>
      </div>
    </ReactCardFlip>
  );
}
