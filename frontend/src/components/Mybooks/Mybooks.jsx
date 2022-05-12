import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../Card/Card";
// import data from "../data";
import Header from "../Header/Header";
import "./Mybooks.css";

function Mybooks() {
  const history = useHistory();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [data, setData] = useState("");

  const submitHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.get("/api/books/", config);

      // console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    submitHandler();
  }, [history]);

  return (
    <div>
      <Header />

      <div className="books-container">
        {userInfo?.isAdmin === true ? (
          <div className="add-new-book">
            <a href="/addbook">
              <button className="new-book-btn">Add New Book</button>
            </a>
          </div>
        ) : (
          <h3>All books</h3>
        )}

        <table className="table-container">
          <td className="columns">Title</td>
          <td className="columns">Author</td>
          <td className="columns">Price</td>

          {userInfo?.isAdmin === true && <td className="columns">Action</td>}
          {data && data.map((each) => <Card book={each} />)}
        </table>
      </div>
    </div>
  );
}

export default Mybooks;
