import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    mongoose.connection.on("connected", () => {
      console.log("DB Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.log("MongoDB Connection Error:", err);
    });

    // ⭐ THIS IS THE LINE YOU MUST ADD
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);


  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
