import { NavLink } from "react-router-dom";
export default function Nav1(props) {
  // const [orderShown, setOrder] = useState(true);
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        onClick={() => {
          setIsCustomer(false);
        }}
      >
        Home
      </NavLink>
      <NavLink to="/Dashboard">Dashboard</NavLink>
      <NavLink
        to="/Form"
        onClick={() => {
          props.changeCartState(!props.cart);
        }}
      >
        {props.cart ? "Order" : props.isMobile ? "Cart" : "Order"}
      </NavLink>
    </nav>
  );
}
