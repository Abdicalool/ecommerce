import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://lag:amal@lag.cjqva.mongodb.net/Proshop?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    console.log(`Mongo DB Connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`error ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
