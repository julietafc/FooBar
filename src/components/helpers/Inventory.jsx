import React from "react";
import "./Inventory.scss";

export default function Inventory(props) {
  function Keg(props) {
    return (
      <li>
        {props.name}: {props.amount} left
      </li>
    );
  }

  function Depot(props) {
    const kegs = props.storage.map((keg, i) => <Keg key={(i < 9 ? "keg0" : "keg") + (i + 1)} {...keg} />);
    return (
      <section className="Depot">
        <Subheading label="Kegs in depot" />
        <ul>{kegs}</ul>
      </section>
    );
  }

  return (
    <div className="inventoryList">
      <Subheading label="Inventory" />
      <Depot {...props} />
    </div>
  );
}
