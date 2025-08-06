import express from "express";
import { submitAdoption, getAllAdoptions } from "../controllers/adoptionController.js";

const router = express.Router();

router.post("/", submitAdoption);       // For form submission
router.get("/", getAllAdoptions);       // For admin panel

export default router;