import React, { useState } from "react";
import "./Login.scss";
import PropTypes from "prop-types";
import Button from "./helpers/Button";
import Title from "./helpers/Title";

// async function loginUser(credentials) {
//   return fetch("http://localhost:3001/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

export default function Login({ setAccess }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const usernameOriginal = "manager";
  const passwordOriginal = "test123";

  function handleSubmit(e) {
    e.preventDefault();
    const access = username === usernameOriginal && password === passwordOriginal;
    if (access) {
      console.log("it's a match");
      setAccess(access);
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     username,
  //     password,
  //   });
  //   setToken(token);
  // };

  return (
    <div className="login-wrapper">
      <Title label="Please Log In" />
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" autoComplete="username" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div>
          <Button className="submit" type="submit" label="Submit" />
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
