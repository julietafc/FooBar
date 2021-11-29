import React from "react";
import "./Inventory.scss"


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
              <h3>Kegs in depot</h3>
            <ul>{kegs}</ul>
          </section>
        );
      }

  return (
      <section className="inventory">
          <h2>Inventory</h2>
          <Depot {...props}/>
      </section>
      
  );
}

