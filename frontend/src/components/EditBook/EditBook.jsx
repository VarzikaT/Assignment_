import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EditBook.css";

function EditBook() {
  const [title, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const { id } = useParams();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      console.log(title, author, price);

      const { data } = await axios.put(
        `/api/books/${id}`,
        {
          title,
          author,
          price,
        },
        config
      );

      console.log(data);

      window.location.href = "/books";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/books/${id}`);
      setName(data.title);
      setAuthor(data.author);
      setPrice(data.price);
    };
    fetching();
  }, [id]);

  return (
    <div>
      <div class="wrapper">
        <div class="pageTitle title"> Add Book </div>
        <div class="secondaryTitle title">
          Add the description of the books to be added
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setName(e.target.value)}
          class="name formEntry"
          placeholder="Name of the Book"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          class="email formEntry"
          placeholder="Name of the Author"
        />
        <input
          type="number"
          class="message formEntry"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price of the Book"
        ></input>
        <button class="submit formEntry" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditBook;
