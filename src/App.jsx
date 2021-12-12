import "./App.scss";
import "./index.scss";
import "antd/dist/antd.css";
import timeDiference from "./modules/timeDiference";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Form from "./components/Form/Form";
import Manager from "./components/Manager/Manager";
import Customer from "./components/Customer/Customer";
import Barteneder from "./components/Bartender/Bartender";
import Home from "./components/Home/Home";
//import { display } from "@mui/system";
// import Nav1 from "./components/helpers/Nav1/Nav1";
import Footer from "./components/helpers/Footer/Footer";
import Header from "./components/helpers/Header/Header";

function App() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [isCustomer, setIsCustomer] = useState(false);
  const [now, setNow] = useState(new Date().getTime());
  const [allOrders, setAllOrders] = useState([]);
  const [ordersReady, setOrdersReady] = useState([]);
  const [cart, setCart] = useState(false);
  const [isHappyHour, setIsHappyHour] = useState(false);
  const [ranking, setRanking] = useState({
    elhefe: 0,
    fairytaleale: 0,
    githop: 0,
    hollabacklager: 0,
    hoppilyeverafter: 0,
    mowintime: 0,
    row26: 0,
    ruinedchildhood: 0,
    sleighride: 0,
    steampunk: 0,
  });
  const [oldServing, setOldServing] = useState([]);
  const [newServing, setNewServing] = useState([]);
  const [orderReady, setOrderRedady] = useState({});
  const beerBasePrice = 40;

  function changeCartState(state) {
    setCart(state);
  }

  useEffect(() => {
    const URL = "https://los-amigos.herokuapp.com/";
    // (1) define within effect callback scope
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setData(data);
        checkTaps(data);
        setNewServing(
          data.serving.map(function (order) {
            const bartender = data.bartenders.find((man) => man.servingCustomer === order.id);
            return { ...order, bartender: bartender.name };
          })
        );
        setAllOrders([...data.queue, ...data.serving]);

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
        // console.log(data);
        const beers = addStuff(data);
        // console.log(beers);
        setProducts(beers);
        fetchData(); // <-- (2) invoke on mount
      });

    return () => {
      clearInterval(id);
      clearInterval(id2);
    };
  }, []);

  //-----------------------
  useEffect(() => {
    console.log("compareOldNew");
    console.log(oldServing);
    console.log(newServing);
    if (oldServing.length > 0) {
      console.log("length>0");
      oldServing.forEach((oldOrder, i, arr) => {
        console.log(oldOrder.id);
        const findIt = [...newServing].find((newOrder) => newOrder.id === oldOrder.id);
        //!findIt && console.log("order ready", oldOrder);
        !findIt && upDateOrdersReady(oldOrder);
        i === arr.length - 1 && setOldServing([...newServing]);
      });
    } else {
      console.log("length<0", newServing);
      setOldServing([...newServing]);
    }
  }, [newServing]);
  //------------------------------

  // allOrders.forEach((order) => {
  //   if (data.bartenders.find((bartender) => bartender.servingCustomer === order.id)) {
  //     const bartender = data.bartenders.filter((bartender) => bartender.servingCustomer === order.id)[0];
  //     if (bartender.statusDetail === "receivePayment") {
  //       const tookenTime = timeDiference(order.startTime, now);
  //       upDateOrdersReady({ id: order.id, tookenTime: tookenTime, bartender: bartender.name, order: order.order });
  //     }
  //   }
  // });

  //-----------------------
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

  function checkTaps(info) {
    setProducts(function (oldProducts) {
      return oldProducts.map((item) => {
        const copy = { ...item };
        if (info.taps.filter((tap) => tap.beer === item.name).length > 0) {
          copy.onTap = true;
        } else {
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

  function upDateOrdersReady(order) {
    if (!ordersReady.find((element) => element.id === order.id)) {
      const orderLowerCase = order.order.map((beer) => beer.toLowerCase().split(" ").join(""));

      orderLowerCase.forEach((beer) => {
        setRanking((oldRanking) => {
          const newRanking = { ...oldRanking };
          newRanking[beer]++;
          return newRanking;
        });
      });

      setOrdersReady(function (oldOrdersReady) {
        const copy = [order, ...oldOrdersReady];
        return copy.slice(0, 10);
      });
    }
    return;
  }

  return (
    <div className="App">
      <Header changeCartState={changeCartState} cart={cart} />
      {/* {isCustomer ? (
        <header className="mobileHeader">
          <h1>Welcome to FooBar</h1>
          <Nav1 isMobile={isMobile} cart={cart} changeCartState={changeCartState} />
        </header>
      ) : (
        <header>
          <h1>FooBar</h1>

          <nav className="navigation">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/Manager">Manager</NavLink>
            <NavLink to="/Bartender">Bartenders</NavLink>

            <NavLink
              to="/Dashboard"
              onClick={() => {
                setIsCustomer(true);
              }}
            >
              Customers
            </NavLink>
          </nav>
        </header>
      )} */}

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Manager" element={<Manager {...data} now={now} />} />
          <Route exact path="/Bartender" element={<Barteneder {...data} now={now} upDateOrdersReady={upDateOrdersReady} ordersReady={ordersReady} isHappyHour={isHappyHour} setIsHappyHour={setIsHappyHour} />} />
          <Route exact path="/Dashboard" element={<Customer {...data} now={now} ordersReady={ordersReady} isHappyHour={isHappyHour} setIsHappyHour={setIsHappyHour} products={products} />} />
          <Route exact path="/Form" element={<Form products={products} cart={cart} isMobile={isMobile} ordersReady={ordersReady} isHappyHour={isHappyHour} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
