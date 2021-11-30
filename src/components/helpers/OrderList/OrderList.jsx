import { useState } from "react";

function Order(props) {
  let order = [...props.order];
  const items = props.order.map(function (item, i) {
    const amount = order.filter((a) => a === item).length;
    const beer = item;
    order = [...order].filter((a) => a !== item);
    return {
      amount: amount,
      name: beer,
    };
  });
  const itemsFilter = items.filter((item) => item.amount !== 0);
  const itemsMap = itemsFilter.map((item, i) => (
    <li key={"item-" + i}>
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
  const ordersServing = props.serving.map(function (order) {
    if (props.bartenders.filter((bartender) => bartender.servingCustomer === order.id).length > 0) {
      const bartender = props.bartenders.filter((bartender) => bartender.servingCustomer === order.id)[0];
      return (
        <li key={"s" + order.id}>
          {order.id} {bartender.name} {bartender.statusDetail}
        </li>
      );
    }
    return <li key={"s" + order.id}>{order.id}</li>;
  });

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
