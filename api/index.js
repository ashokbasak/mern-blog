import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const PORT = process.env.PORT || 4000;
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});

// userName:ashokbasak80
// password:ashok1980
//mongodb+srv://ashokbasak80:ashok1980@cluster0.33swabv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://ashokbasak80:<password>@cluster0.33swabv.mongodb.net/
