import "./Manager.scss";
import Clock from "../helpers/Time/Time";
import Inventory from "../helpers/Inventory/Inventory";
import Workers from "../helpers/Workers/Workers";
import TopBeer from "../helpers/Ranking/Ranking";
import Sales from "../helpers/Sales/Sales"

export default function Manager(props) {
  if (!props.bartenders) {
    return null;
  }

  return (
    <>
      <div className="clock">
        <Clock />
      </div>

      <section className="manager">
        <div className="manager__header">
          <h2>Managers overview</h2>
        </div>
        <Sales className="Sales" {...props}/>
        <Inventory className="Inventory" {...props} />
        <Workers className="Workers" {...props} />
        <TopBeer className="TopBeer" {...props} />
      </section>
    </>
  );
}
