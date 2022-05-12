const express = require("express");
const {
  getBookById,
  createBooks,
  getBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(getBooks);

router.route("/create").post(createBooks);

router.route("/:id").get(getBookById).put(updateBook).delete(deleteBook);

module.exports = router;
