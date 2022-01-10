import "./Manager.scss";
import Inventory from "./helpers/Inventory";
import Workers from "./helpers/Workers";
import TopBeer from "./helpers/Ranking";
import Sales from "./helpers/Sales";
import React, { useState, useEffect } from "react";
import Login from "../components/Login";

export default function Manager(props) {
  const [token, setToken] = useState();
  if (!props.bartenders) {
    return null;
  }
  if (!token) {
    return <Login setToken={setToken} />;
  } else {
  }

  return (
    <>
      <section className="manager">
        <div className="header">
          <h2>Managers overview</h2>
        </div>
        <div>
          <Sales className="sales" {...props} />
          <Workers className="workers" {...props} />
          <Inventory className="inventory" {...props} />
        </div>
        <TopBeer className="topBeer" {...props} />
      </section>
    </>
  );
}
