import { useState, useRef, useEffect } from "react";
import "./Checkout.scss";
import MaskInput from "react-maskinput";

export default function Checkout(props) {
  const form = useRef(null);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function postOrder() {
    fetch("https://los-amigos.herokuapp.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.payload),
    })
      .then((response) => {
        const obj = response.json();
        // window.alert(obj.Object.id);
        return obj;
        console.log(obj);
      })
      .then((data) => {
        window.alert(data.id);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const nameChanged = (e) => {
    setName(e.target.value);
  };
  function onSubmit(e) {
    e.preventDefault();
    console.log(form.current.checkValidity());
  }

  return (
    <div className="Form">
      <h3>Checkout</h3>

      <form ref={form} onSubmit={onSubmit}>
        <label>
          Name
          <input type="text" required onChange={nameChanged} name="name" value={name} />
        </label>

        <label>
          Card number
          <MaskInput type="text" required name="number" inputMode="numeric" value={number} alwaysShowMask maskChar=" " mask="0000 0000 0000 0000" size={20} onChange={(e) => setNumber(e.target.value)} />
        </label>

        <button onClick={postOrder}>Pay</button>
      </form>
    </div>
  );
}
