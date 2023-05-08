require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const books = require("./routes/books");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://jezozobrado:hn3mTPRD@mongo-playground.nr0qfnc.mongodb.net/botm?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to the database."))
  .catch((err) => console.log("oops", err));

app.use(express.json());
app.use("/api/books", books);

app.listen(process.env.PORT, () => console.log("Listening on port 3000"));
