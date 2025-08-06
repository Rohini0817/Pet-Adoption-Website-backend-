import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// ✅ Import routes
import petRoutes from "./routes/petRoutes.js";
import adoptionRoutes from "./routes/adoptionRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js"; // Login/Register routes

// ✅ Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS Configuration for Vercel frontend
app.use(
  cors({
    origin: [
      "https://pet-adoption-frontend-2y3z87ssk.vercel.app", // ✅ your frontend URL
    ],
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json()); // Parse incoming JSON payloads

// ✅ API Routes
app.use("/api/pets", petRoutes);
app.use("/api/adoptions", adoptionRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

// ✅ Root test route
app.get("/", (req, res) => {
  res.send("API is working 🐾");
});

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection failed:", err));