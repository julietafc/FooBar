import React from "react";
import "./Sales.scss";

export default function Sales(props) {
  if (!props.products) {
    return null;
  }
  const namePrice = props.products.map((beer) => {
    const name = beer.name.toLowerCase().split(" ").join("");
    const total = props.ranking[name] * beer.price();
    return total;
  });

  const initialValue = 0;
  let sum = namePrice.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, initialValue);

  console.log(namePrice);
  console.log(sum);

  return (
    <div className="sales">
      <div className="salesHeader">
        <Subheading label="Todays sales" />
      </div>
      <div className="figures">
        <div>
          <Subheading label="Total income" />
          <p>{sum} kr</p>
        </div>
        <div>
          <Subheading label="Total Orders" />
          <p>{props.dayOrders}</p>
        </div>
        <div>
          <Subheading label="Average order income" />
          <p>{Math.round(sum / props.dayOrders).toFixed(0)} kr</p>
        </div>
      </div>
    </div>
  );
}
