import "./Navbar.scss";

import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="Navbar">
      <h1>Welcome to FooBar</h1>
      <div className="MobileIcon">
        <FaBars />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Manager</a>
          </li>
          <li>
            <a href="#">Bartenders</a>
          </li>
          <li>
            <a href="#">Customers</a>
          </li>
          <li>
            <a href="#">Order</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
