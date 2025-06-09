import mongoose from "mongoose";

export default async function connectDB() {
  const connectString = process.env.MONGODB_URI;

  try {
    const conn = await mongoose.connect(connectString);
    console.log(`MongoDB connected. Connected to database: ${connectString}`);
  } catch (error) {
    console.error(`Errorjjk: ${error.message}`);
    process.exit(1);
  }
}
