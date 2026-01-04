const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

module.exports = connectToDB;
