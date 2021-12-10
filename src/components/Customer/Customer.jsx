import "./Customer.scss";
import TimeToClose from "../helpers/TimeToClose/TimeToClose";
import timeDiference from "../../modules/timeDiference";

function Beers(props) {
  const allOrders = [...props.serving, ...props.queue];
  const displayBeers = allOrders.map((order) => <div key={order.id} className="beerPx" style={{ width: `${order.order.length * 10 + 50}px` }}></div>);
  return <section className="Beers">{displayBeers}</section>;
}

export default function Customer(props) {
  if (!props.taps) {
    return null;
  }

  // const allOrders = [...props.queue, ...props.serving];

  // allOrders.forEach((order) => {
  //   if (props.bartenders.find((bartender) => bartender.servingCustomer === order.id)) {
  //     const bartender = props.bartenders.filter((bartender) => bartender.servingCustomer === order.id)[0];
  //     if (bartender.statusDetail === "receivePayment") {
  //       const tookenTime = timeDiference(order.startTime, props.now);
  //       props.upDateOrdersReady({ id: order.id, tookenTime: tookenTime });
  //     }
  //   }
  // });

  const readyMap = props.ordersReady.map((order) => order.id && <li key={order.id}>{order.id}</li>);

  return (
    <div className="Customer">
      <TimeToClose now={props.now} isHappyHour={props.isHappyHour} setIsHappyHour={props.setIsHappyHour} />
      <Beers {...props} />
      <aside>
        <h2>orders ready</h2>
        <ul className="orders-ready">{readyMap}</ul>
      </aside>
    </div>
  );
}
