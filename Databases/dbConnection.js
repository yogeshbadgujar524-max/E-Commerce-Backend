import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Ecommerce",
    });

    console.log("Database Connected...");
  } catch (error) {
    console.log("Database Connection Error:", error);
  }
};