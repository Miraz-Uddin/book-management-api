import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

// making .env available to Use
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT;
const database = process.env.DB_URL;

mongoose
  .connect(database)
  .then(() => console.log("Connected!"))
  .catch(() => {
    console.log("Error While Connected!");
  });

app.listen(port, () => {
  console.log(`Express Server Connected on Port: ${port}`);
});
