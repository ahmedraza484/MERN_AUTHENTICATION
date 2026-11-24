import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "MERN_AUTHENTICATION",
    });
    console.log(`Connected To MongoDB ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`Connection Failed! ${error}`);
  }
};

export default connectDB;
