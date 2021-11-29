import { useState } from "react";

export default function OrderList(props) {
  const ordersToDo =
    props.queue.length < 1 ? (
      <li>no orders</li>
    ) : (
      props.queue.map((order) => (
        <li key={order.id}>
          {order.id}{" "}
          <ul>
            {order.order.map((beer, i) => (
              <li key={order.id + "b" + i}>{beer}</li>
            ))}
          </ul>
        </li>
      ))
    );
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
