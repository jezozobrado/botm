const mongoose = require("mongoose");
const Joi = require("joi");

const bookSchema = new mongoose.Schema({
  title: String,
  abstractText: String,
  author: String,
  price: Number,
  defaultCategory: String,
  description: String,
  image: String,
  isInStock: Boolean,
  mainGenre: String,
  synopsis: String,
});

const Book = mongoose.model("Book", bookSchema);

const validateBook = (book) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    abstractText: Joi.string().required(),
    author: Joi.string().required(),
    price: Joi.number().required(),
    defaultCategory: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    isInStock: Joi.boolean().required(),
    mainGenre: Joi.string().required(),
    synopsis: Joi.string().required(),
  });
  return schema.validate(book);
};

(exports.Book = Book), (exports.validate = validateBook);
