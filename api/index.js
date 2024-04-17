import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGODBURI)
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.use("/api/user", userRoutes);
