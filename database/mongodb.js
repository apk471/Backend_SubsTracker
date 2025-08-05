import mongoose from "mongoose";
import { CONN_URI, NODE_ENV } from "../config/env.js";

if (!CONN_URI) {
  throw new Error("CONN_URI is not present");
}

const connectToDB = async () => {
  try {
    await mongoose.connect(CONN_URI);
    console.log(`Connected to DB in ${NODE_ENV} mode`);
  } catch (error) {
    console.log("Error connecting to DB", error);
    process.exit(1);
  }
};

export default connectToDB;
