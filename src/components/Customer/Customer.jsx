import "./Customer.scss";
import TimeToClose from "../helpers/TimeToClose/TimeToClose";
export default function Customer(props) {
  if (!props.taps) {
    return null;
  }

  const readyMap = props.ordersReady.map((order) => <li key={order.id}>{order.id}</li>);

  return (
    <div className="Customer">
      <TimeToClose now={props.now} />
      <section>
        <h2>orders ready</h2>
        <ul className="orders-ready">{readyMap}</ul>s
      </section>
    </div>
  );
}
