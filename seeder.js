import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./backend/User.js";
import products from "./backend/products.js";
import User from "./backend/model/userModel.js";
import Product from "./backend/model/productModel.js";
import Order from "./backend/model/ordersModel.js";
import connectDb from "./backend/config/db.js";

dotenv.config();
connectDb();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((pruducts) => {
      return { ...pruducts, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
