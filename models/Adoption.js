import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema(
  {
    petId: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true },
    petName: { type: String, required: true }, // Added for easier display in admin panel
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    address: String,
    message: String
  },
  { timestamps: true }
);

export default mongoose.model("Adoption", adoptionSchema);