require("dotenv").config();
const express = require("express");
const connectToDB = require("./dbConfig/dbConnect");

const app = express();

const PORT = process.env.PORT || 5000;
if (!PORT) {
  throw new Error("PORT is not defined");
}

// Middlewares
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Server running");
});

// Start server after DB connection
const startServer = async () => {
  try {
    await connectToDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
