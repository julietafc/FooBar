import { useState, useRef, useEffect } from "react";
import "./Checkout.scss";
import { Form, Input, Button } from "antd";
import MaskedInput from "antd-mask-input";

export default function Checkout(props) {
  const form = useRef(null);

  const onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  const onFinish = (values, e) => {
    e.preventDefault();
    e.current.checkValidity();
    console.log("Success:", values);
    postOrder();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
        props.addID(data.id);
        props.resetBasket();
      })

      .catch((err) => {
        console.error(err);
      });
  }

  const nameChanged = (e) => {
    setName(e.target.value);
  };

  // function onSubmit(e) {
  //   e.preventDefault();
  //   form.current.checkValidity();
  // }

  return (
    <div className="FormWrapper">
      <h3>Checkout</h3>

      <Form
        onSubmit={onSubmit}
        ref={form}
        className="Form"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          validateStatus="error"
          help="Should be combination of numbers & alphabets"
          hasFeedback
          className="inputs"
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          hasFeedback
          validateStatus="success"
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
          <MaskedInput mask="1111 1111 1111 1111" name="card" size="20" onChange={onChange} />
        </Form.Item>
        <div className="smallInputs">
          <Form.Item
            className="inputs"
            label="Exp"
            name="exp"
            rules={[
              {
                required: true,
                message: "Enter Exp!",
              },
            ]}
          >
            <MaskedInput mask="11/11" name="expiry" placeholder="mm/yy" onChange={onChange} style={{ width: "100px" }} />
          </Form.Item>

          <Form.Item
            className="inputs"
            label="CVV"
            name="cvv"
            rules={[
              {
                required: true,
                message: "Enter CVV!",
              },
            ]}
          >
            <MaskedInput mask="111" name="ccv" style={{ width: "80px" }} onChange={onChange} />
          </Form.Item>
        </div>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
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
