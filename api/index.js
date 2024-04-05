import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 4000;
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/auth/signin", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// app.get("/test", (req, res) => {
//   res.json({ message: "API iS WORKING" });
// });

// userName:ashokbasak80
// password:ashok1980
//mongodb+srv://ashokbasak80:ashok1980@cluster0.33swabv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://ashokbasak80:<password>@cluster0.33swabv.mongodb.net/
