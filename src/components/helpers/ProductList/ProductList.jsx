import Product from "./Product/Product";
import "./ProductList.scss";

// console.log(products.filter((beer) => beer.onTap));
export default function ProductList(props) {
  // const beers = props.products.map((product) => <Product {...product} />);
  return (
    <section className="ProductList">
      <h2>Our selection</h2>
      {/* <section>{beers}</section> */}
      <Product />
    </section>
  );
}
