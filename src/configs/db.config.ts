import mongoose from "mongoose";
import {envConfig} from './env.config'

const {MONGODB_URI}=envConfig.env

async function connectToDb(): Promise<void> {
  try {

    await mongoose.connect(MONGODB_URI!);
    console.log("Connected to MongoDB...");
  } catch (err) {
    console.error("Could not connect to MongoDB...", err);
  }
}

export default connectToDb;
