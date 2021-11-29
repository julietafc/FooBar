import { useState, useRef } from "react";
import "./Checkout.scss";
import MaskInput from "react-maskinput";
import { PaymentInputsContainer } from "react-payment-inputs";

export default function Checkout(props) {
  const form = useRef(null);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

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
        {/* <PaymentInputsContainer>
          {({ meta, getCardNumberProps, getExpiryDateProps, getCVCProps }) => (
            <div>
              <input {...getCardNumberProps({ onChange: handleChangeCardNumber })} value={cardNumber} />
              <input {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} value={expiryDate} />
              <input {...getCVCProps({ onChange: handleChangeCVC })} value={cvc} />
              {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
            </div>
          )}
        </PaymentInputsContainer> */}
        <label>
          Name
          <input type="text" required onChange={nameChanged} name="name" value={name} />
        </label>

        <label>
          Card number
          <MaskInput type="text" required name="number" inputmode="numeric" value={number} alwaysShowMask maskChar=" " mask="0000 0000 0000 0000" size={20} onChange={(e) => setNumber(e.target.value)} />
        </label>
        <label>
          Exp.
          <input type="text" required onChange={(e) => setNumber(e.target.value)} name="number" value={number} size={4} />
        </label>
        <label>
          CVV
          <input type="text" required onChange={(e) => setNumber(e.target.value)} name="number" value={number} />
        </label>

        <button>Pay</button>
      </form>
    </div>
  );
}
