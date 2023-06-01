import dotenv from "dotenv";
import app from "./app.js";

// making .env available to Use
dotenv.config({
  path: "./.env",
});
const port = process.env.port;

app.listen(port, () => {
  console.log(`Express Server Connected on Port: ${port}`);
});
