import express from "express";
import { submitContact, getMessages } from "../controllers/contactController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", submitContact);           // public
router.get("/", protect, adminOnly, getMessages); // admin only

export default router;
