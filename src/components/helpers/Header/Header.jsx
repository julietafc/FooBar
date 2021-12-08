import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav1 from "../../helpers/Nav1/Nav1";
import "./Header.scss";

export default function Header(props) {
  const [windowDimension, setWindowDimension] = useState(null);
  const [isCustomer, setIsCustomer] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  //   const [cart, setCart] = useState(false);

  //   function changeCartState(state) {
  //     setCart(state);
  //   }

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
    <>
      {isCustomer ? (
        <header className="mobileHeader">
          <h1>Welcome to FooBar</h1>
          <Nav1 isMobile={isMobile} cart={props.cart} changeCartState={props.changeCartState} />
        </header>
      ) : (
        <header>
          <h1>FooBar</h1>

          <nav className="navigation">
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option" onClick={closeMobileMenu}>
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="option" onClick={closeMobileMenu}>
                <NavLink to="/Manager">Manager</NavLink>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <NavLink to="/Bartender">Bartenders</NavLink>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <NavLink
                  to="/Dashboard"
                  onClick={() => {
                    setIsCustomer(true);
                  }}
                >
                  Customers
                </NavLink>
              </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
              {click ? "X " : "O "}
            </div>
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/Manager">Manager</NavLink>
            <NavLink to="/Bartender">Bartenders</NavLink>
            <NavLink
              to="/Dashboard"
              onClick={() => {
                setIsCustomer(true);
              }}
            >
              Customers
            </NavLink> */}
          </nav>
        </header>
      )}
    </>
  );
}
