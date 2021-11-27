import Basket from "../helpers/Basket/Basket";
import ProductList from "../helpers/ProductList/ProductList";
import { useState } from "react";

import "./Form.scss";
export default function Form(props) {
  const [cards, setCards] = useState(myCards);
  const beers = props.products.filter((beer) => beer.onTap);
  return (
    <div className="Layout">
      <ProductList beers={beers} />
      <Basket />
    </div>
  );
}
