import "./Basket.scss";
import { useState } from "react";
export default function Basket() {
  return (
    <aside className="aside">
      <div>
        <h3>My Basket</h3>
      </div>
      {/* <Counter /> */}
      <Checkout />
    </aside>
  );
}

// function Counter(props) {
//   const [count, setCount] = useState(0);
//   function update(e) {
//     setCount(10);
//   }
//   return <button onClick={update}>Click {{ count }}</button>;
// }

function Checkout() {
  return (
    <form>
      <input />
      <Button />
    </form>
  );
}

function Button(props) {
  return <button>Click Me</button>;
}
