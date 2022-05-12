const expressAsyncHandler = require("express-async-handler");
const Book = require("../models/bookModel");

const getBooks = expressAsyncHandler(async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

const createBooks = expressAsyncHandler(async (req, res) => {
  const { title, author, price } = req.body;

  // if any field is not provided throw error
  if (!title || !price || !author) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const book = new Book({
      title,
      author,
      price,
    });

    const createBook = await book.save();
    res.status(201).json(createBook);
  }
});

const getBookById = expressAsyncHandler(async (req, res) => {
  const book_id = req.params.id;
  const book = await Book.findById(book_id);

  if (book) res.json(book);
  else
    res.status(404).json({
      message: "Book not Found",
    });
});

const updateBook = expressAsyncHandler(async (req, res) => {
  const book_id = req.params.id;
  const { title, author, price } = req.body;

  const book = await Book.findById(book_id);

  if (book) {
    book.title = title;
    book.author = author;
    book.price = price;

    const updatedBook = await book.save();

    res.json(updatedBook);
  } else {
    throw new Error("Book not found");
  }
});

const deleteBook = expressAsyncHandler(async (req, res) => {
  const book_id = req.params.id;

  const book = await Book.findById(book_id);

  if (book) {
    await book.remove();
    res.json({
      message: "Book Deleted",
    });
  } else {
    throw new Error("Book not found");
  }
});

module.exports = { getBooks, getBookById, createBooks, updateBook, deleteBook };
