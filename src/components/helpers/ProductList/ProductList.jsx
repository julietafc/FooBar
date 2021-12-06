import { useState } from "react";
import Product from "./Product/Product";
import "./ProductList.scss";

export default function ProductList(props) {
  const beers = props.beers.map((beer) => <Product addToBasket={props.addToBasket} addMoreBeer={props.addMoreBeer} key={beer.id} {...beer} isHappyHour={props.isHappyHour} />);
  // const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState("name");
  const [dir, setDir] = useState("asc");
  let displayList = [...beers];
  // if (filter) {
  //   displayList = beers.filter((beer) => beer.category === filter);
  // }

  function sortBeers() {
    displayList.sort((a, b) => {
      if (a[sort] > b[sort]) {
        return dir === "asc" ? 1 : -1;
      } else {
        return dir === "asc" ? -1 : 1;
      }
    });
  }
  sortBeers();
  return (
    <section className="ProductList">
      <h2>Our selection</h2>
      <button onClick={() => setSort("name")}>Name</button>
      <button onClick={() => setSort("category")}>Type</button>
      <button onClick={() => setSort("alcohol")}>% alcohol</button>
      <section>{beers}</section>
    </section>
  );
}
