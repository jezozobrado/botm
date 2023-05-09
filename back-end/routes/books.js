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
        "slug",
        "description",
        "defaultCategory",
        "author",
        "mainGenre",
        "image",
        "badges",
        "_id",
      ])
    )
  );
});

router.get("/:slug", async (req, res) => {
  const book = await Book.find({ slug: req.params.slug });
  if (!book) return res.status(404).send("Book does not exist.");
  res.send(book);
});

// router.get("/:category", async (req, res) => {
//   const books = await Book.find({ defaultCategory: req.params.category });
//   if (!books) return res.status(404).send("Books does not exist.");

//   res.send(books);
// });

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  book = new Book(
    lodash.pick(req.body, [
      "title",
      "slug",
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
