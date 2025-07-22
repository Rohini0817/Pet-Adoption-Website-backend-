import Adoption from "../models/Adoption.js";

// POST adoption form
export const submitAdoption = async (req, res) => {
  try {
    const newAdoption = new Adoption(req.body);
    await newAdoption.save();
    res.status(201).json({ message: "Adoption request submitted" });
  } catch (err) {
    res.status(400).json({ message: "Failed to submit adoption form" });
  }
};
