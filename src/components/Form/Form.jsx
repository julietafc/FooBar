import Basket from "../helpers/Basket/Basket";
import ProductList from "../helpers/ProductList/ProductList";

import "./Form.scss";
export default function Form(props) {
  // const beers = props.filter((beer) => beer.onTap);
  return (
    <div className="Layout">
      {/* <ProductList beers={beers} /> */}
      <ProductList />
      <Basket />
    </div>
  );
}
