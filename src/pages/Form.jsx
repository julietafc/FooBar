import Basket from "../components/helpers/Basket/Basket";
import ProductList from "../components/helpers/ProductList/ProductList";

import { useState } from "react";

import "./Form.scss";
export default function Form(props) {
  if (!props.products) {
    return null;
  }
  const beers = props.products.filter((beer) => beer.onTap);
  const [basket, setBasket] = useState([]);
  // const [beer, setBeers] = useState(beers);

  function addToBasket(product) {
    setBasket(function (oldBasket) {
      if (basket.filter((element) => element.name === product.name).length > 0) {
        return oldBasket.map((item) => {
          const copy = { ...item };

          if (copy.name === product.name) {
            copy.amount = copy.amount + product.amount;
          }

          return copy;
        });
      } else {
        const newBasket = oldBasket.concat(product);

        return newBasket;
      }
    });
  }

  function addMoreBeer(amount, productName) {
    setBasket(function (oldBasket) {
      return oldBasket.map((item) => {
        const copy = { ...item };
        if (copy.name === productName) {
          copy.amount = amount;
        }
        return copy;
      });
    });
  }
  return (
    <div className="Layout">
      <ProductList addToBasket={addToBasket} beers={beers} />
      <Basket addMoreBeer={addMoreBeer} basket={basket} />
    </div>
  );
}
