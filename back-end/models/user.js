const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, min: 5, max: 50 },
  lastName: { type: String, required: true, min: 5, max: 50 },
  email: { type: String, required: true, unique: true, min: 5, max: 50 },
  password: { type: String, required: true, min: 5, max: 50 },
});

const User = mongoose.model("User", userSchema);

const validateUser = (user) => {
  const schema = Joi.object({
    firstName: Joi.string().min(5).max(50).required(),
    lastName: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(50).required().email(),
    password: Joi.string().min(5).max(50).required(),
  });
  return schema.validate(user);
};

exports.User = User;
exports.validate = validateUser;
