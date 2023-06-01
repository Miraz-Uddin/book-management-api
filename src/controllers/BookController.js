import Book from "../models/Book";

/**
 * Retrieve all books
 */
export async function getAllBooks(req, res) {
  const id = req.params.id;
  if (!id) {
    const allBooks = await Book.find({});
    return res.status(200).json(allBooks);
  }

  const book = await Book.find({ _id: id });
  return res.status(200).json(book);
}

/**
 * Retrieve a specific book by ID
 */
export async function getSingleBook(req, res) {
  const id = req.params.id;
  if (!id) {
    const allBooks = await Book.find({});
    return res.status(200).json(allBooks);
  }

  const book = await Book.find({ _id: id });
  return res.status(200).json(book);
}

/**
 * Create a new book
 */
export function storeBook(req, res) {
  const myBook = new Book(req.body);
  myBook
    .save()
    .then(() => {
      res.status(200).send("Successfully Inserted!");
    })
    .catch((err) => {
      res.status(404).send("Something went wrong!");
    });
}

/**
 * Update a book by ID
 */
export function updateBook(req, res) {
  const id = req.params.id;
  Book.updateOne({ _id: id }, { $set: req.body })
    .then(() => {
      res.status(200).send("Successfully Updated!");
    })
    .catch((err) => {
      res.status(404).send("Something went wrong!");
    });
}

/**
 * Delete a book by ID
 */
export function deleteBook(req, res) {
  const id = req.params.id;

  Book.deleteOne({ _id: id })
    .then(() => res.send("Successfully Deleted"))
    .catch(() => res.send("Something wrong Happed"));
}
