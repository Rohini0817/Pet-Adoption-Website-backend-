import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema(
  {
    petId: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true },
    fullName: String,
    email: String,
    phone: String,
    address: String,
    message: String,
  },
  { timestamps: true }
);

export default mongoose.model("Adoption", adoptionSchema);
