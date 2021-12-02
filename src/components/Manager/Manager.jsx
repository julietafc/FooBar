import "./Manager.scss";
import Clock from "../helpers/Time/Time";
import Inventory from "../helpers/Inventory/Inventory";
import Workers from "../helpers/Workers/Workers";
import TopBeer from "../helpers/Ranking/Ranking";

export default function Manager(props) {
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
