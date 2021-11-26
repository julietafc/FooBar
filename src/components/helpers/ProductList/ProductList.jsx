import Product from "./Product/Product";
import "./ProductList.scss";

export default function ProductList() {
  return (
    <section className="ProductList">
      <h2>Our selection</h2>
      <Product />
    </section>
  );
}
