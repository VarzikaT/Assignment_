import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Signup.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState(false);

  const [error, setError] = useState();

  const history = useHistory();

  const [check, setCheck] = useState(false);
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) history.push("/books");
  }, [history, check]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const isAdmin = admin;
      console.log(email, password, name, isAdmin);
      const { data } = await axios.post(
        "/api/users/signup",
        {
          email,
          name,
          password,
          isAdmin,
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
    <div className="signup-wrapper">
      <h2 className="error">{error && error}</h2>
      <div className="signup-container">
        <h1>Signup</h1>
        <form action="">
          <div className="box">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              maxlength="25"
            />
          </div>
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

          <div className="select">
            <select value={admin} onChange={(e) => setAdmin(e.target.value)}>
              <option selected value={false}>
                Guest
              </option>
              <option value={true}>Admin</option>
            </select>
          </div>

          <button type="submit" className="btn" onClick={submitHandler}>
            Signup
          </button>
        </form>
        <a href="/login" className="b2">
          Already have an account ? Login here
        </a>
      </div>
    </div>
  );
}

export default Signup;
