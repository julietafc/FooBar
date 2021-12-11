import "./BeerProduct";
import "./BeersMenu.scss";

export default function BeersMenu(props) {
  const displayList = props.products.map((beer) => <li>{beer.name}</li>);
  return (
    <section>
      <h2>Our Selection</h2>
      <ul>{displayList}</ul>
    </section>
  );
}
