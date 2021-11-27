import "./Product.scss";
import { useState } from "react";
import Button from "../../Button/Button";

export default function Product(props) {
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
  return (
    <article className="Product">
      <img src={"./src/assets/" + props.label} alt="" />
      <div className="Text">
        <h3>{props.name}</h3>
        <p>{props.category}</p>
        <p></p>
        <div className="actions">
          <div className="amountWrapper">
            {/* <Button onClick={decreaseAmount} action="-" /> */}
            <button onClick={decreaseAmount}>-</button>
            <p className="amount">{amount}</p>
            <button onClick={increaseAmount}>+</button>
          </div>
          <Button />
        </div>
      </div>
    </article>
  );
}
