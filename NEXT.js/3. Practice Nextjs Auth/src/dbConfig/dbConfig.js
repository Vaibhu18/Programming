import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb is connected");
    });

    connection.on("error", (error) => {
      console.log("mongodb connection error", error);
      process.exit(1);
    });
  } catch (error) {
    console.log("Something went wrong in connecting to mongodb", error);
  }
};
