import Pet from "../models/pet.js"; // ✅ Correct the path (you wrote "./controllers/petController" by mistake earlier)

export const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createPet = async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    await newPet.save();
    res.status(201).json(newPet);
  } catch (err) {
    res.status(400).json({ message: "Invalid pet data" });
  }
};

// 🔥 Add this function to get pet by ID
export const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet not found" });
    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};