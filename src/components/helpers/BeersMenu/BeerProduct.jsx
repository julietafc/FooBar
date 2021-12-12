import "./BeersMenu.scss";

export default function BeerProduct(props) {
  function add() {
    props.addToBasket({
      amount: amount,
      price: function () {
        return props.price() * this.amount * (props.isHappyHour ? 0.5 : 1);
      },
      name: props.name,
    });
  }

  return (
    <li>
      <article className="BeerProduct">
        <div>
          <h2>{props.name}</h2>
          <p>
            {props.category} | {props.alc}%
          </p>
        </div>
        <div className="dots"></div>
        <p className="price">${props.price() * (props.isHappyHour ? 0.5 : 1)}</p>
      </article>
    </li>
    // <article className="BeerProduct">
    //   <div className="mainInfo">
    //     <img src={"./assets/" + props.label} alt="" />
    //     <div className="text">
    //       <p>
    //         {props.category} | {props.alc}%
    //       </p>
    //       <h3>{props.name}</h3>
    //       <div className="money">
    //         <img src="/assets/coin.svg" alt="" />
    //         <p className="price">${props.price() * (props.isHappyHour ? 0.5 : 1)}</p>
    //       </div>
    //     </div>
    //   </div>
    // </article>
  );
}
