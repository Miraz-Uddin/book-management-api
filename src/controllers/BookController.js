import Book from "../models/Book.js";

/**
 * Retrieve all books
 */
export async function getAllBooks(req, res) {
  const allBooks = await Book.find();
  return res.status(200).json({
    status: "success",
    total: allBooks?.length,
    data: allBooks,
  });
}

/**
 * Retrieve a specific book by ID
 */
export async function getSingleBook(req, res) {
  const _id = req.params.id;
  const book = await Book.find({ _id });
  return res.status(200).json({
    status: "success",
    data: book,
  });
}

/**
 * Create a new book
 */
export function storeBook(req, res) {
  const myBook = new Book(req.body);
  myBook
    .save()
    .then((data) => {
      res.status(200).send({
        status: "success",
        data,
      });
    })
    .catch((err) => {
      console.log(err?.errors?.title?.message);
      res.status(404).send({
        status: "failed",
        data: {
          error: err?.errors?.title,
        },
      });
    });
}

/**
 * Update a book by ID
 */
export function updateBook(req, res) {
  const _id = req.params.id;
  Book.findOneAndUpdate(
    { _id },
    { $set: req.body },
    { returnDocument: "after" }
  )
    .then((data) => {
      res.status(200).send({
        status: "success",
        data,
      });
    })
    .catch((err) => {
      const error = JSON.parse(JSON.stringify(err));
      res.status(404).send({
        status: "failed",
        data: {
          error,
        },
      });
    });
}

/**
 * Delete a book by ID
 */
export function deleteBook(req, res) {
  const _id = req.params.id;
  Book.deleteOne({ _id })
    .then((data) => {
      const { acknowledged } = data;
      if (acknowledged) {
        res.status(200).send({
          status: "success",
          data: "Data Deleted Successfully",
        });
      } else {
        res.status(200).send({
          status: "failed",
          data: "Something Went Wrong",
        });
      }
    })
    .catch((err) => {
      const error = JSON.parse(JSON.stringify(err));
      res.status(404).send({
        status: "failed",
        data: {
          error,
        },
      });
    });
}
