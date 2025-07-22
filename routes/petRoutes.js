import express from "express";
import { getAllPets, createPet, getPetById } from "../controllers/petController.js";

const router = express.Router();

router.get("/", getAllPets);
router.post("/", createPet);
router.get("/:id", getPetById); // 🔥 Add this line to fetch pet by ID

export default router;