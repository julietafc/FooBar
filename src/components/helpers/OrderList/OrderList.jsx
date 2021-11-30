import { useState } from "react";

function Order(props) {
  let order = [...props.order];
  const items = props.order.map(function (item) {
    const amount = order.filter((a) => a === item).length;
    const beer = item;
    order = [...order].filter((a) => a !== item);
    return {
      amount: amount,
      name: beer,
    };
  });
  const itemsFilter = items.filter((item) => item.amount !== 0);
  const itemsMap = itemsFilter.map((item) => (
    <li>
      {item.amount} {item.name}
    </li>
  ));
  return (
    <li>
      {props.id}
      <ul>{itemsMap}</ul>
    </li>
  );
}

function OrdersToDo(props) {
  const queue = [...props.queue];
  const orders = queue.map((order) => <Order key={order.id} {...order} />);

  return <ul>{orders.length < 1 ? "no orders" : orders}</ul>;
}

export default function OrderList(props) {
  const ordersServing = props.serving.map((order) => <li key={"s" + order.id}>{order.id}</li>);
  return (
    <aside className="OrderList">
      <div>
        <h2>Orders to do</h2>
        <OrdersToDo {...props} />
      </div>
      <div>
        <h2>Orders in process</h2>
        <ul>{ordersServing}</ul>
      </div>
    </aside>
  );
}
