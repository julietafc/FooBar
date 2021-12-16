import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import "./Header.scss";
export default function Header(props) {
  const [windowDimension, setWindowDimension] = useState(null);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <header className={props.isCustomer ? "mobileHeader" : "null"}>
      <div className="logo">
        <a href="/">
          <img src={props.isCustomer && isMobile ? "/assets/logo-02-black.svg" : "/assets/logo-02.svg"} alt="logo foobar" />
        </a>
      </div>
      <Nav isMobile={isMobile} cart={props.cart} changeCartState={props.changeCartState} isCustomer={props.isCustomer} click={click} handleClick={handleClick} closeMobileMenu={closeMobileMenu} />
      {/* <nav className="navigation">
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/">Home</NavLink>
          </li>

          {!props.isCustomer && (
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/Manager">Manager</NavLink>
            </li>
          )}

          {!props.isCustomer && (
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/Bartender">Bartenders</NavLink>
            </li>
          )}

          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/Dashboard">{!props.isCustomer ? "Customers" : "Dashboard"}</NavLink>
          </li>

          {props.isCustomer && (
            <li className="option" onClick={closeMobileMenu}>
              <NavLink
                to="/Form"
                onClick={() => {
                  props.changeCartState(!props.cart);
                }}
              >
                {props.cart ? "Menu" : isMobile ? "Cart" : "Menu"}
              </NavLink>
            </li>
          )}
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          <button className="btn-burger">{click ? "X" : "☰"}</button>
        </div>
      </nav> */}
    </header>
  );
}
