import React from 'react';
import "./Manager.scss";
import Clock from "../helpers/Time/Time";
import Inventory from "../helpers/Inventory/Inventory";
import Workers from "../helpers/Workers/Workers";
import TopBeer from "../helpers/Ranking/Ranking";
import Sales from "../helpers/Sales/Sales"
import LoginBtn from '../helpers/Button/loginBtn';
import LogoutBtn from '../helpers/Button/LogoutBtn';


export default function Manager(props) {
  if (!props.bartenders) {
    return null;
  }
  return (
    <>
    <LoginBtn/>
    <LogoutBtn/>

      <div className="clock">
        <Clock />
      </div>

      <section className="manager">
        <div className="manager__header">
          <h2>Managers overview</h2>
        </div>
        <Sales {...props} />
        <Inventory {...props} />
        <TopBeer {...props} />
        <Workers {...props} />
      </section>
    </>
  );
}
