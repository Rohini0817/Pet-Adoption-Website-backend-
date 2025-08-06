// routes/adminRoutes.js

import express from "express";
import { getAllAdoptions } from "../controllers/adoptionController.js";

const router = express.Router();

// ✅ Route to fetch all adoptions
router.get("/adoptions", getAllAdoptions);

// 🔁 TEMPORARY: Route to test admin route is active
router.get("/test", (req, res) => {
  res.send("Admin test route working ✅");
});

export default router;
