import express from "express";
import {
  deleteBook,
  getAllBooks,
  getSingleBook,
  storeBook,
  updateBook,
} from "../controllers/BookController.js";
import { home } from "../controllers/HomeController.js";
const router = express.Router();

router.get("/", home);
router.get("/books", getAllBooks);
router.get("/books/:id", getSingleBook);
router.post("/books", storeBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export default router;
