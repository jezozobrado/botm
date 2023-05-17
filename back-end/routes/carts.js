const express = require("express");
const Cart = require("../models/cart");
const { User } = require("../models/user");
const { Book } = require("../models/book");
const router = express.Router();

router.get("/", async (req, res) => {
  const carts = await Cart.find()
    .populate("books", "title -_id")
    .populate("customer", "firstName")
    .select("books customer");

  res.send(carts);
});

router.get("/:customerId", async (req, res) => {
  console.log(
    "customerid",
    req.params.customerId,
    typeof req.params.customerId
  );

  if (!req.params) return res.status(400).send("No cart.");

  // const cart = await Cart.find();
  const cart = await Cart.findOne({ customer: req.params.customerId })
    .populate("books", "title author image -_id")
    .populate("customer", "firstName")
    .select("books customer");

  console.log(cart);

  if (!cart) return res.status(400).send("No cart.");

  res.send(cart);
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  // console.log(typeof req.body.customerId);
  //check if customer is authenticated.
  const customer = await User.findOne({ _id: req.body.customer });
  if (!customer) return res.status(400).send("Customer does not exist!");

  //check if book is valid
  const book = await Book.findOne({ _id: req.body.book });
  if (!book) return res.status(400).send("Book does not exist!");

  //check if a cart exist associated with the user
  let cart = await Cart.findOne({ customer: req.body.customer })
    .populate("books", "title author image -_id")
    .populate("customer", "firstName")
    .select("books customer");

  if (cart) {
    console.log(book.title, cart);
    cart.books.push(book);
  } else {
    cart = new Cart({
      customer: req.body.customer,
      books: [req.body.book],
    });
  }

  await cart.save();

  res.send(cart);
});

module.exports = router;
