import mongoose from "mongoose";

export default async function dbConnection() {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((error) => {
        console.log("Error connecting to database", error);
      });
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}
