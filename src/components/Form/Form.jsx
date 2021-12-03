import Basket from "../helpers/Basket/Basket";
import ProductList from "../helpers/ProductList/ProductList";

import { useState, useEffect } from "react";

import "./Form.scss";
export default function Form(props) {
  if (!props.products) {
    return null;
  }
  const beers = props.products.filter((beer) => beer.onTap);
  const [basket, setBasket] = useState([]);

  // const [windowDimension, setWindowDimension] = useState(null);

  // useEffect(() => {
  //   setWindowDimension(window.innerWidth);
  // }, []);

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowDimension(window.innerWidth);
  //   }

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const isMobile = windowDimension <= 640;

  function addToBasket(product) {
    setBasket(function (oldBasket) {
      if (basket.filter((element) => element.name === product.name).length > 0) {
        return oldBasket.map((item) => {
          const copy = { ...item };

          if (copy.name === product.name) {
            copy.amount = Number(copy.amount) + Number(product.amount);
          }

          return copy;
        });
      } else {
        const newBasket = oldBasket.concat(product);

        return newBasket;
      }
    });
  }

  function addMoreBeer(amount, productName) {
    setBasket(function (oldBasket) {
      return oldBasket.map((item) => {
        const copy = { ...item };
        if (copy.name === productName) {
          copy.amount = amount;
        }
        return copy;
      });
    });
  }

  function deleteBeer(amount, productName) {
    setBasket(function (oldBasket) {
      return oldBasket.map((item) => {
        const copy = { ...item };
        if (copy.name === productName) {
          copy.amount = 0;
        }
        return copy;
      });
    });
  }

  function increaseAmount(productName) {
    setBasket(function (oldBasket) {
      return oldBasket.map((item) => {
        const copy = { ...item };
        if (copy.name === productName) {
          copy.amount++;
        }
        return copy;
      });
    });
  }

  function decreaseAmount(productName) {
    setBasket(function (oldBasket) {
      return oldBasket.map((item) => {
        const copy = { ...item };
        if (copy.name === productName) {
          copy.amount--;
        }
        return copy;
      });
    });
  }

  const style = {
    position: "absolute",
    top: "0",
  };

  if (props.isMobile) {
    return (
      <div className="Layout">
        {!props.cart ? <ProductList addToBasket={addToBasket} beers={beers} /> : <Basket style={props.cart && style} deleteBeer={deleteBeer} decreaseAmount={decreaseAmount} increaseAmount={increaseAmount} addMoreBeer={addMoreBeer} basket={basket} />}
      </div>
    );
  } else {
    return (
      <div className="Layout">
        <ProductList addToBasket={addToBasket} beers={beers} />
        <Basket style={props.cart && style} deleteBeer={deleteBeer} decreaseAmount={decreaseAmount} increaseAmount={increaseAmount} addMoreBeer={addMoreBeer} basket={basket} />
      </div>
    );
  }
}
