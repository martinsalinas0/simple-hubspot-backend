import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function connectDB() {
  const connectString = process.env.MONGODB_URI;


  if(!connectString) { 
      console.error("MONGODB_URI is not defined in environment variables"); 
      process.exit(1); 
  } 

  try {
    const conn = await mongoose.connect(connectString);
    console.log(`MongoDB connected. Connected to database: ${connectString} and ${conn.connection.name}`);
  } catch (error) {
    console.error(`Database Error: ${error.message}`);
    process.exit(1);
  }
}

