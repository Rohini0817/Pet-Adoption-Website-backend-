import User from "../models/User.js";
import Adoption from "../models/Adoption.js"; // <-- new import (model for adoption requests)

// Existing code (unchanged)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

// New function to fetch all adoption requests
export const getAllAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.find().sort({ createdAt: -1 });
    res.json(adoptions);
  } catch (err) {
    console.error("Error fetching adoptions:", err);
    res.status(500).json({ message: "Error fetching adoptions" });
  }
};
