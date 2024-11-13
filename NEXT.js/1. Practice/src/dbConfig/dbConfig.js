import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log("MongoDB is connected...");
      })
      .catch((error) => {
        console.log("Failed to connect to MongoDB : ", error);
        process.exit();
      });
  } catch (error) {
    console.log("Something went wrong in connecting with mongo db : ", error);
  }
};
