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

  // const items = props.order.map(function (item, i) {
  //   const amount = order.filter((a) => a === item).length;
  //   const beer = item;
  //   order = [...order].filter((a) => a !== item);
  //   const beerName = beer.toLowerCase().split(" ").join("");
  //   ranking[beerName] = ranking[beerName] + amount;
  //   return {
  //     amount: amount,
  //     name: beer,
  //   };
  // });

  //const itemsFilter = items.filter((item) => item.amount !== 0);

  // const itemsMap = itemsFilter.map((item, i) => (
  //   <li key={"item-" + i}>
  //     {item.amount} {item.name}
  //   </li>
  // ));

  const orderClean = {};
  props.order.forEach((beer) => {
    orderClean[beer] = (orderClean[beer] || 0) + 1;
  });

  const orderMap = Object.keys(orderClean).map((item, i) => (
    <li key={"item-" + i}>
      {orderClean[item]} {item}
    </li>
  ));

  if (props.bartenders.find((bartender) => bartender.servingCustomer === props.id)) {
    const bartender = props.bartenders.filter((bartender) => bartender.servingCustomer === props.id)[0];
    manName = bartender.name;
    statusStyle.color = color.startServing;

    if (bartender.statusDetail === "receivePayment") {
      statusStyle.color = color.receivePayment;
    }
  }

  return (
    <li className="Order" data-id={props.id} style={statusStyle}>
      {props.id} {manName}
      <ul>{orderMap}</ul>
    </li>
  );
}

function OrdersToDo(props) {
  const queue = [...props.serving, ...props.queue];
  const orders = queue.map((order) => <Order key={order.id} {...order} {...props} />);

  const allOrders = [...orders].reverse();

  return <ul className="OrderToDo">{allOrders}</ul>;
}

export default function OrderList(props) {
  return (
    <aside className="OrderList">
      <div className="to-do">
        <h2>Orders to do</h2>
        <OrdersToDo {...props} />
      </div>
    </aside>
  );
}
