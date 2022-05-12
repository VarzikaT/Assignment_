import axios from "axios";
import React from "react";
import "./Card.css";

function Card({ book }) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const confirmHandler = (id) => {
    console.log(userInfo);

    if (userInfo.isAdmin === false)
      window.alert("You can't perform this action");
    else if (window.confirm("Are you Sure...?")) deleteHandler(id);
  };

  const deleteHandler = async () => {
    console.log(book._id);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.delete(`/api/books/${book._id}`, config);

      console.log(data);
    } catch (error) {
      console.log(error);
    }

    window.location.href = "/books";
  };

  const editHandler = () => {
    window.location.href = `/book/${book._id}`;
  };

  return (
    <tr>
      <td aria-describedby="Title :">{book.title}</td>
      <td aria-describedby="Author :">{book.author}</td>
      <td aria-describedby="Price :">{book.price}</td>

      {userInfo?.isAdmin === true && (
        <div className="action-btns">
          <button className="editbtn btn1" onClick={editHandler}>
            Edit
          </button>
          <button
            className="editbtn btn2"
            onClick={() => confirmHandler(book._id)}
          >
            Delete
          </button>
        </div>
      )}
    </tr>
  );
}

export default Card;
