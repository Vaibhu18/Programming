import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("Mongodb is connected...");
  } catch (error) {
    console.log("Mongodb connection error : ", error);
    process.exit(1);
  }
};

export default connectDB;