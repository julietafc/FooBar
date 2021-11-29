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

  function addMoreBeer(product) {
    setBasket(function (oldBasket) {
      return oldBasket.map((item) => {
        const copy = { ...item };
        if (copy.id === product.id) {
          copy.amount++;
        }
        return copy;
      });
    });
  }
  return (
    <div className="Layout">
      <ProductList addToBasket={addToBasket} addMoreBeer={addMoreBeer} beers={beers} />
      <Basket addMoreBeer={addMoreBeer} basket={basket} />
    </div>
  );
}
