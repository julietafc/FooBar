import "./Product.scss";
import { useState } from "react";
import Button from "../../Button/Button";
import ReactCardFlip from "react-card-flip";

export default function Product(props) {
  const [flipped, setFlipped] = useState(false);
  const [amount, setAmount] = useState(0);

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
  }
  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
      <article className="Product">
        <button className="frontCard" onClick={handleClick}>
          Info
        </button>
        <img src={"./src/assets/" + props.label} alt="" />
        <div className="Text">
          <h3>{props.name}</h3>
          <p>{props.category}</p>

          <div className="primary">
            <p>{props.alc}% vol.</p>
            <p>${props.price()}</p>
          </div>
          <div className="actions">
            <div className="amountWrapper">
              <button onClick={decreaseAmount}>-</button>
              <p className="amount">{amount}</p>
              <button onClick={increaseAmount}>+</button>
            </div>

            <button onClick={add}>Add</button>

            {/* <Button /> */}
          </div>
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
