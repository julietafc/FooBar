import "./Manager.scss";
import Inventory from "./helpers/Inventory";
import Workers from "./helpers/Workers";
import TopBeer from "./helpers/Ranking";
import Sales from "./helpers/Sales";
import Title from "./helpers/Title";
import React, { useState } from "react";
import Login from "../components/Login";

export default function Manager(props) {
  const [access, setAccess] = useState();
  if (!props.bartenders) {
    return null;
  }
  if (!access) {
    return <Login setAccess={setAccess} />;
  }

  return (
    <>
      <section className="manager">
        <div className="header">
          <Title label="Managers overview" />
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
