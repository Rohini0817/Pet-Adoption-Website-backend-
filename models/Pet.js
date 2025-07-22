import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    weight: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Pet", petSchema);
