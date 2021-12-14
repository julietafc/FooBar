import "./Manager.scss";
import Clock from "../helpers/Time/Time";
import Inventory from "../helpers/Inventory/Inventory";
import Workers from "../helpers/Workers/Workers";
import TopBeer from "../helpers/Ranking/Ranking";

export default function Manager(props) {
  if (!props.bartenders) {
    return null;
  }

  const namePrice = props.products.map((beer) => {
    const name = beer.name.toLowerCase().split(" ").join("");
    const total = props.ranking[name] * beer.price();
    return total;
  });

  const initialValue = 0;

  let sum = namePrice.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, initialValue);

  console.log(namePrice);
  console.log(sum);

  return (
    <>
      <div className="clock">
        <Clock />
      </div>

      <section className="manager">
        <div className="manager__header">
          <h2>Managers overview</h2>
        </div>

        <Inventory {...props} />

        <Workers {...props} />

        <TopBeer {...props} />
      </section>
    </>
  );
}
