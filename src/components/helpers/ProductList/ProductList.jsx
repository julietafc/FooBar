import Product from "./Product/Product";
import "./ProductList.scss";

export default function ProductList(props) {
  const beers = props.beers.map((beer) => <Product key={beer.id} {...beer} />);
  return (
    <section className="ProductList">
      <h2>Our selection</h2>
      <section>{beers}</section>
    </section>
  );
}
