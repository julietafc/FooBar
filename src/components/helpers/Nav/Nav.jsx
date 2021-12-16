import { NavLink } from "react-router-dom";
export default function Nav(props) {
  // const [orderShown, setOrder] = useState(true);
  return (
    <nav className="navigation">
      <ul className={props.click ? "nav-options active" : "nav-options"}>
        <li className="option" onClick={props.closeMobileMenu}>
          <NavLink to="/">Home</NavLink>
        </li>

        {!props.isCustomer && (
          <li className="option" onClick={props.closeMobileMenu}>
            <NavLink to="/Manager">Manager</NavLink>
          </li>
        )}

        {!props.isCustomer && !props.isMobile && (
          <li className="option" onClick={props.closeMobileMenu}>
            <NavLink to="/Bartender">Bartenders</NavLink>
          </li>
        )}

        <li className="option" onClick={props.closeMobileMenu}>
          <NavLink to="/Dashboard">{!props.isCustomer ? "Customers" : "Dashboard"}</NavLink>
        </li>

        {props.isCustomer && (
          <li className="option" onClick={props.closeMobileMenu}>
            <NavLink
              to="/Form"
              onClick={() => {
                props.changeCartState(!props.cart);
              }}
            >
              {props.cart ? "Menu" : props.isMobile ? "Cart" : "Menu"}
            </NavLink>
          </li>
        )}
      </ul>
      <div className="mobile-menu" onClick={props.handleClick}>
        <button className="btn-burger">{props.click ? "X" : "☰"}</button>
      </div>
    </nav>
  );
}
