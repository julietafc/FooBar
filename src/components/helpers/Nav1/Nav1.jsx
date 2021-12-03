import { Link } from "react-router-dom";
export default function Nav1(props) {
  // const [orderShown, setOrder] = useState(true);
  return (
    <nav className="navigation">
      <Link
        to="/"
        onClick={() => {
          setIsCustomer(false);
        }}
      >
        Home
      </Link>
      <Link to="/Customers">Dashboard</Link>
      <Link
        to="/Form"
        onClick={() => {
          props.changeCartState(!props.cart);
        }}
      >
        {props.cart ? "Order" : props.isMobile ? "Cart" : "Order"}
      </Link>
      {/* <a
        className="notShown"
        onClick={() => {
          props.changeCartState(!props.cart);
        }}
      >
        Cart
      </a> */}
    </nav>
  );
}
