import Basket from "../helpers/Basket/Basket";
import ProductList from "../helpers/ProductList/ProductList";

import "./Form.scss";
export default function Form() {
  return (
    <div className="Form">
      <ProductList />
      <Basket />
    </div>
  );
}
