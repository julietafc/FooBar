import { useState, useRef } from "react";

export default function Checkout(props) {
  const form = useRef(null);

  const [name, setName] = useState("");
  const [cc, setCC] = useState("");
  const nameChanged = (e) => {
    setName(e.target.value);
  };
  function onSubmit(e) {
    e.preventDefault();
    console.log(form.current.checkValidity());
  }
  return (
    <>
      <h3>Checkout</h3>

      <form ref={form} onSubmit={onSubmit}>
        <label>
          Name
          <input type="text" required onChange={nameChanged} name="name" value={name} />
        </label>
        <label>
          Credit card
          <input type="text" required onChange={(e) => setCC(e.target.value)} name="cc" value={cc} />
        </label>
        <button>Pay</button>
      </form>
    </>
  );
}
