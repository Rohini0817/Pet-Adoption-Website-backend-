import express from "express";
import { submitAdoption } from "../controllers/adoptionController.js";

const router = express.Router();

router.post("/", submitAdoption);

export default router;
