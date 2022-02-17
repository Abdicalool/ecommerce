import express from "express";
import product from "../model/productModel.js";
import asyncHandler from "express-async-handler";
const routes = express.Router();

routes.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await product.find({});
    res.json(products);
  })
);

routes.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const products = await product.findById(req.params.id);

    if (products) {
      res.json(products);
    } else {
      res.status(400).json({ message: "Product not find" });
    }
  })
);

export default routes;
