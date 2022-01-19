import BeerProduct from "./BeerProduct";
import "./BeersMenu.scss";
import Title from "./Title";

export default function BeersMenu(props) {
  const products = [...props.products].filter((beer) => beer.onTap);
  const displayList = products.map((beer) => <BeerProduct key={beer.id} {...beer} isHappyHour={props.isHappyHour} />);
  return (
    <section className="BeersMenu">
      <Title label="Our Selection" />
      <ul className="beers-list">{displayList}</ul>
    </section>
  );
}
