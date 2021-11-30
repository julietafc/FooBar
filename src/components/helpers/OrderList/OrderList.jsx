import { useState } from "react";

export default function OrderList(props) {
  const [count, setCount] = useState(0);
  function update(e) {
    setCount(10);
  }
  return <button onClick={update}>Click {{ count }}</button>;
  const ordersToDo = props.queue.length < 1 ? <li>no orders</li> : props.queue.map((order) => <li key={order.id}>{order.id} </li>);
  const ordersServing = props.serving.map((order) => <li key={"s" + order.id}>{order.id}</li>);
  return (
    <aside className="OrderList">
      <div>
        <h2>Orders to do</h2>
        <ul>{ordersToDo}</ul>
      </div>
      <div>
        <h2>Orders in process</h2>
        <ul>{ordersServing}</ul>
      </div>
    </aside>
  );
}
