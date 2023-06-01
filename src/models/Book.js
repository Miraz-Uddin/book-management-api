import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  publishedYear: {
    type: Number,
    default: 2023,
  },
});

const Book = new mongoose.model("Book", BookSchema);

export default Book;
