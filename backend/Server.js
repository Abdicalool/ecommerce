import express from "express";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";
import connecDB from "./config/db.js";

const app = express();
connecDB();
dotenv.config();
app.get("/", (req, res) => {
  res.send("Api running");
});
app.use("/api/product", productRoutes);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`SERVER RUNNING IN ${process.env.NODE_INV} IN ${PORT}`)
);
