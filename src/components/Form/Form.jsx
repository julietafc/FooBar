import Basket from "../helpers/Basket/Basket";
import ProductList from "../helpers/ProductList/ProductList";

import { useState } from "react";

import "./Form.scss";
export default function Form(props) {
  const beers = props.products.filter((beer) => beer.onTap);
  const [basket, setBasket] = useState([]);
  // const [beer, setBeers] = useState(beers);

  function addToBasket(product) {
    setBasket(function (oldBasket) {
      const nextState = oldBasket.concat(product);
      return nextState;
    });
  }
  return (
    <div className="Layout">
      <ProductList addToBasket={addToBasket} beers={beers} />
      <Basket basket={basket} />
    </div>
  );
}
