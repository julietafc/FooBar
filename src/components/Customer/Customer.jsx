import "./Customer.scss";
import TimeToClose from "../helpers/TimeToClose/TimeToClose";
import timeDiference from "../../modules/timeDiference";

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
    <div className="Customer Layout">
      <TimeToClose now={props.now} isHappyHour={props.isHappyHour} setIsHappyHour={props.setIsHappyHour} />
      <section>
        <h2>orders ready</h2>
        <ul className="orders-ready">{readyMap}</ul>
      </section>
    </div>
  );
}
