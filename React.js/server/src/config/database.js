// database.js=connects backend to db

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con=await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      `MongoDB connected: ${con.connection.host}`
    );

  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
