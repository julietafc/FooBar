import "./Checkout.scss";
import React from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import Card from "./Card";
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from "./cardUtils";
import { useModal } from "react-hooks-use-modal";

export default function Checkout(props) {
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };

  return (
    <div className="Form">
      <h3>Checkout</h3>
      <button onClick={open}>OPEN</button>
      <Modal>
        <Styles>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values, active }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <button onClick={close}>CLOSE</button>
                  <Card number={values.number || ""} name={values.name || ""} expiry={values.expiry || ""} cvc={values.cvc || ""} focused={active} />
                  <div>
                    <Field className="input" name="number" component="input" type="text" pattern="[\d| ]{16,22}" placeholder="Card Number" format={formatCreditCardNumber} />
                  </div>
                  <div>
                    <Field className="input" name="name" component="input" type="text" placeholder="Name" />
                  </div>
                  <div>
                    <Field className="input" name="expiry" component="input" type="text" pattern="\d\d/\d\d" placeholder="Valid Thru" format={formatExpirationDate} />
                    <Field className="input" name="cvc" component="input" type="text" pattern="\d{3,4}" placeholder="CVC" format={formatCVC} />
                  </div>
                  <div className="buttons">
                    <button type="button" onClick={form.reset} disabled={submitting || pristine}>
                      Reset
                    </button>
                    <button type="submit" disabled={submitting}>
                      Submit
                    </button>
                  </div>
                  {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                </form>
              );
            }}
          />
        </Styles>
      </Modal>
    </div>
  );
}
