import React from "react";

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


      //from here
function Orders(props) {

}

    return (
        <div className="sales">
            <h3>Todays sales numbers</h3>
            <div>
                <h4>Total income</h4>
                <p>{sum}kr</p>
            </div>
            <div>
                <h4>Total Orders</h4>
                <p>{props.allOrders[0].id}</p>
            </div>
        </div>
    )
}