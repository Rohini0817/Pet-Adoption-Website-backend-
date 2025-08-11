import {
  getAllUsers,
  getAllAdoptions
} from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

import express from "express";
const router = express.Router();

// Fetch all users (Admin only)
router.get("/users", protect, adminOnly, getAllUsers);

// Fetch all adoptions (Admin only)
router.get("/adoptions", protect, adminOnly, getAllAdoptions);

// Test route to check if admin routes are active
router.get("/test", (req, res) => {
  res.status(200).send("Admin test route working ✅");
});

export default router;
