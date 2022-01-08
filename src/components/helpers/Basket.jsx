import "./Basket.scss";

import MyBasket from "./MyBasket";
export default function Basket(props) {
  return (
    <aside className="aside">
      <MyBasket {...props} />
    </aside>
  );
}
