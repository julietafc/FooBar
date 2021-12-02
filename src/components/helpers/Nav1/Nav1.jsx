import { Link } from "react-router-dom";
export default function Nav1() {
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
      <Link to="/Form">Order</Link>
      <a
        className="notShown"
        // onClick={() => {
        //   isMobile(false);
        // }}
      >
        Cart
      </a>
    </nav>
  );
}
