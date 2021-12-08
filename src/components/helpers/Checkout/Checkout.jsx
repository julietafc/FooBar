import { useState, useRef, useEffect } from "react";
import "./Checkout.scss";
import ModalYourID from "../ModalYourID/ModalYourID";
import { Form, Input, Button } from "antd";
import MaskedInput from "antd-mask-input";

export default function Checkout(props) {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [cardnumber, setCardNumber] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCVV] = useState("");
  // const [isEnabled, setEnabled] = useState(true);

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
      })
      .then((data) => {
        props.addID(data.id);
        props.resetBasket();
        props.setIsModalYourID(true);
      })

      .catch((err) => {
        console.error(err);
      });
  }

  // const onSubmit = (values, e) => {
  //   e.preventDefault();
  //   console.log(form.current.checkValidity());
  //   console.log("Success:", values);
  //   postOrder();
  // };

  function onSubmit(e) {
    e.preventDefault();
    console.log(form.current.checkValidity());
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="FormWrapper">
      <h3>Checkout</h3>

      <Form
        ref={form}
        className="Form"
        // name="basic"
        // initialValues={{
        //   remember: true,
        // }}
        onSubmit={onSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <fieldset>
          <Form.Item
            // validateStatus="error"
            // help="Should be combination of numbers & alphabets"
            hasFeedback
            className="inputs"
            label="Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            rules={[
              {
                required: true,
                message: "How should we call you?",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            hasFeedback
            // validateStatus="success"
            label="Card number"
            name="cardnumber"
            className="inputs"
            rules={[
              {
                required: true,
                message: "We really need you to pay!",
              },
            ]}
          >
            <MaskedInput mask="1111 1111 1111 1111" name="card" size="20" onChange={(e) => setCardNumber(e.target.value)} value={cardnumber} />
          </Form.Item>
          <div className="smallInputs">
            <Form.Item
              className="inputs"
              label="Exp"
              name="exp"
              rules={[
                {
                  required: true,
                  message: "Enter Exp",
                },
              ]}
            >
              <MaskedInput mask="11/11" name="expiry" placeholder="mm/yy" style={{ width: "100px" }} onChange={(e) => setExp(e.target.value)} value={exp} />
            </Form.Item>

            <Form.Item
              className="inputs"
              label="CVV"
              name="cvv"
              rules={[
                {
                  required: true,
                  message: "Enter CVV",
                },
              ]}
            >
              <MaskedInput mask="111" name="ccv" style={{ width: "70px" }} onChange={(e) => setCVV(e.target.value)} value={cvv} />
            </Form.Item>
          </div>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button className="submitButton" type="submit">
              Submit
            </Button>
          </Form.Item>
        </fieldset>
      </Form>

      {/* <form ref={form} onSubmit={onSubmit}>
        <label>
          Name
          <input type="text" required onChange={nameChanged} name="name" value={name} />
        </label>

        <label>
          Card number
          <input type="text" inputMode="numeric" />
          <MaskInput type="text" required name="number" inputMode="numeric" value={ccnumber} alwaysShowMask maskChar=" " mask="0000 0000 0000 0000" size={20} onChange={(e) => setCCNumber(e.target.value)} />
        </label>

        <button onClick={postOrder}>Pay</button>
      </form> */}
    </div>
  );
}
