import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const history = useHistory();

  const [check, setCheck] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) window.location.href = "/books";
  }, [history, check]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      console.log(email, password);
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
    setCheck(!check);
  };

  return (
    <div className="login-wrapper">
      <h2 className="error">{error && error}</h2>
      <div className="login-container">
        <h1>Login</h1>
        <form action="">
          <div className="box">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              maxlength="25"
            />
          </div>
          <div className="box">
            <input
              type="password"
              placeholder="Password"
              required
              maxlength="15"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={submitHandler} className="btn">
            Login
          </button>
        </form>

        <a href="/signup" className="b1">
          Create Account
        </a>

        <a href="/books" className="b2">
          Login as Guest
        </a>
      </div>
    </div>
  );
};

export default Login;
