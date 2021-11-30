import "./App.scss";
import "./index.scss";
import "antd/dist/antd.css";
import { Outlet, Link } from "react-router-dom";
import { Tabs } from "antd";
import React, { useState, useEffect } from "react";
import Barteneder from "./components/Bartender/Bartender";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Invoices from "../src/pages/Invoices";
import Manager from "./components/Manager/Manager";

const { TabPane } = Tabs;

function App() {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [realTime, setRealTime] = useState(0);
  const beerBasePrice = 40;
  //const [orderTime, setRealTime] = useState(0);
  const [now, setNow] = useState(new Date().getTime());

  useEffect(() => {
    const URL = "https://los-amigos.herokuapp.com/";
    // (1) define within effect callback scope
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const json = await res.json();
        setData(json);
        checkTaps(json);
        //   setRealTime(json.timestamp);
      } catch (error) {
        console.log(error);
      }
    };

    const id = setInterval(() => {
      fetchData(); // <-- (3) invoke in interval callback
    }, 5000);

    function upDateNow() {
      setNow(new Date().getTime());
    }
    const id2 = setInterval(() => {
      upDateNow();
    }, 1000);

    fetch("https://los-amigos.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const beers = addStuff(data);
        console.log(beers);
        setProducts(beers);
        fetchData(); // <-- (2) invoke on mount
      });

    return () => {
      clearInterval(id);
      clearInterval(id2);
    };
  }, []);

  function checkTaps(info) {
    setProducts(function (oldProducts) {
      return oldProducts.map((item) => {
        const copy = { ...item };
        if (info.taps.filter((tap) => tap.beer === item.name).length > 0) {
          copy.onTap = true;
        } else {
          // console.log(copy.name + " is out");
          copy.onTap = false;
        }

        return copy;
      });
    });
  }

  function addStuff(data) {
    return data.map((beer, i) => {
      const copy = {
        ...beer,
        id: (i < 9 ? "b0" : "b") + (i + 1),
        onTap: false,
        price: function () {
          return Math.round(this.alc + beerBasePrice);
        },
        amount: 1,
        totalPrice: function () {
          return this.amount * this.price();
        },
      };
      return copy;
    });
  }

  // console.log(products.filter((beer) => beer.onTap));

  return (
    <div className="App">
      <header>
        <h1>Welcome to FooBar</h1>
        <nav className="navigation">
          <Link to="/Manager">Manager</Link>
          <Link to="/Bartender">Bartenders</Link>
          <Link to="/Expenses">Customers</Link>
          <Link to="/Form">Form</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="Manager" element={<Manager {...data} now={now} />} />
          <Route path="Bartender" element={<Barteneder {...data} now={now} />} />
          <Route path="Form" element={<Form products={products} />} />
        </Routes>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane className="TabPane" tab="Manager" key="1">
            {data.taps && <Manager {...data} now={now} />}
          </TabPane>
          <TabPane className="TabPane" tab="Bartenders" key="2">
            {data.taps && <Barteneder {...data} now={now} />}
          </TabPane>
          <TabPane className="TabPane" tab="Customers" key="3">
            Content for Customers
          </TabPane>
          <TabPane className="TabPane" tab="Order" key="4">
            {products && <Form products={products} />}
          </TabPane>
        </Tabs>
      </main>
    </div>
  );
}
function callback(key) {
  console.log(key);
}
export default App;
