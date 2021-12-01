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
      <ul className="orders-ready">{readyMap.length > 10 ? readyMap.slice(0, 10) : readyMap}</ul>
    </div>
  );
}
