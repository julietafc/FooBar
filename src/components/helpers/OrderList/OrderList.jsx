import { useState } from "react";

export default function OrderList(props) {
  const [count, setCount] = useState(0);
  function update(e) {
    setCount(10);
  }
  return <button onClick={update}>Click {{ count }}</button>;
}
