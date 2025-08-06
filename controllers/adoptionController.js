// controllers/adoptionController.js

import Adoption from "../models/Adoption.js";

// ✅ Save adoption request
export const submitAdoption = async (req, res) => {
  try {
    const adoption = new Adoption(req.body);
    await adoption.save();
    console.log("✅ New adoption saved:", adoption);
    res.status(201).json({ message: "Adoption request saved." });
  } catch (err) {
    console.error("❌ Failed to save adoption:", err);
    res.status(500).json({ error: "Failed to save adoption request." });
  }
};

// ✅ Fetch all adoptions for admin
export const getAllAdoptions = async (req, res) => {
  try {
    console.log("🔍 getAllAdoptions route hit");
    const adoptions = await Adoption.find().sort({ createdAt: -1 });
    console.log("✅ Found adoptions:", adoptions);
    res.json(adoptions);
  } catch (err) {
    console.error("❌ Failed to fetch adoptions:", err);
    res.status(500).json({ error: "Failed to fetch adoption requests." });
  }
};
