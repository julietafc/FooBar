import { useState } from "react";
import timeDiference from "../../../modules/timeDiference";

function Order(props) {
  const color = {
    queue: "white",
    startServing: "orange",
    pourBeer: "yellow",
    receivePayment: "green",
  };

  let order = [...props.order];
  const statusStyle = { color: color.queue };
  let manName = "";
  let tookenTime = {
    hours: "",
    minutes: "",
    seconds: "",
  };

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

  if (props.bartenders.filter((bartender) => bartender.servingCustomer === props.id).length > 0) {
    const bartender = props.bartenders.filter((bartender) => bartender.servingCustomer === props.id)[0];
    manName = bartender.name;
    if (bartender.statusDetail === "startServing" || "reserveTap") {
      statusStyle.color = color.startServing;
    }
    if (bartender.statusDetail === "pourBeer") {
      statusStyle.color = color.pourBeer;
    }
    if (bartender.statusDetail === "receivePayment") {
      statusStyle.color = color.receivePayment;
      tookenTime = timeDiference(props.startTime, props.now);
    }
  }
  return (
    <li className="Order" data-id={props.id} style={statusStyle}>
      {props.id} {manName} {tookenTime.minutes} {tookenTime.seconds}
      <ul>{itemsMap}</ul>
    </li>
  );
}

function OrdersToDo(props) {
  const queue = [...props.serving, ...props.queue];
  const orders = queue.map((order) => <Order key={order.id} {...order} bartenders={props.bartenders} now={props.now} />);

  // const ordersServing = props.serving.map(function (order) {
  //   if (props.bartenders.filter((bartender) => bartender.servingCustomer === order.id).length > 0) {
  //     const bartender = props.bartenders.filter((bartender) => bartender.servingCustomer === order.id)[0];
  //     return (
  //       <li key={"s" + order.id}>
  //         {order.id} {bartender.name} {bartender.statusDetail}
  //       </li>
  //     );
  //   }
  //   return <li key={"s" + order.id}>{order.id}</li>;
  // });

  const allOrders = [...orders].reverse();

  return <ul className="OrderToDo">{allOrders}</ul>;
}

export default function OrderList(props) {
  // const ordersServing = props.serving.map(function (order) {
  //   if (props.bartenders.filter((bartender) => bartender.servingCustomer === order.id).length > 0) {
  //     const bartender = props.bartenders.filter((bartender) => bartender.servingCustomer === order.id)[0];
  //     return (
  //       <li key={"s" + order.id}>
  //         {order.id} {bartender.name} {bartender.statusDetail}
  //       </li>
  //     );
  //   }
  //   return <li key={"s" + order.id}>{order.id}</li>;
  // });

  return (
    <aside className="OrderList">
      <div className="to-do">
        <h2>Orders to do</h2>
        <OrdersToDo {...props} />
      </div>
      {/* <div>
        <h2>Orders in process</h2>
        <ul>{ordersServing}</ul>
      </div> */}
    </aside>
  );
}
