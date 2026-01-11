require("dotenv").config();
const express = require("express");
const connectToDB = require("./dbConfig/dbConnect");
const authRouter = require("../server/routes/authRoutes")
const cors = require('cors')
const cookieParser = require("cookie-parser")

const app = express();


const PORT = process.env.PORT || 5000;
if (!PORT) {
  throw new Error("PORT is not defined");
}

app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
  credentials: true
}))
// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth/", authRouter)


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

// app.post("/register", async (req, res) => {
//   try {
//     const { email } = req.body;
//     const foundUser = await User.findOne({ email: email });
//     if (foundUser) {
//       return res.status(409).json({ message: "User already exists" });
//     }
//     const newUser = await User.create(req.body);
//     if (!newUser) {
//       return res.status(404).json({ messsage: "User not found" });
//     }
//     res.status(201).json({ status: "success", user: newUser });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

startServer();
