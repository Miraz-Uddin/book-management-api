import express from "express";
import { home, homePost } from "../controllers/HomeController.js";
const router = express.Router();

router.get("/home", home);
router.post("/home", homePost);

export default router;
