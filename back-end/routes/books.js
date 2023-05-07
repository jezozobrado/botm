const express = require("express");
const router = express.Router();
const lodash = require("lodash");
const { Book, validate } = require("../models/book");

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.send(
    books.map((book) =>
      lodash.pick(book, [
        "title",
        "description",
        "author",
        "mainGenre",
        "image",
        "_id",
      ])
    )
  );
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  book = new Book(
    lodash.pick(req.body, [
      "title",
      "abstract",
      "author",
      "price",
      "defaultCategory",
      "description",
      "image",
      "isInStock",
      "mainGenre",
      "synopsis",
    ])
  );

  await book.save();
  res.send(lodash.pick(book, ["title", "abstract"]));
});
module.exports = router;
