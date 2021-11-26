import "./Product.scss";
import { useState } from "react";
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
      <img src="./src/assets/elhefe.png" alt="" />
      <div className="Text">
        <h3>Product 1</h3>
        <p>Type of beer</p>
        <div className="amountWrapper">
          <button onClick={decreaseAmount}>-</button>
          <p className="amount">{amount}</p>
          <button onClick={increaseAmount}>+</button>
        </div>
      </div>
    </article>
  );
}
