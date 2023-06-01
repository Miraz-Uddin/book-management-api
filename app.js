import cors from "cors";
import express from "express";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import xss from "xss-clean";
import limiter from "./src/config/limiter.js";
import router from "./src/routes/api.js";

// Express Initialize
const app = new express();
app.use(express.json());

// Security Middleware
app.use(cors());
app.use(helmet());
app.use(rateLimit(limiter));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Routing
app.use("/api/v1", router);
app.use("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    data: "No Data Found",
  });
});

export default app;
