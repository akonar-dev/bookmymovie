const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  const token = req.cookies.token
  console.log(token,"token")
  if (!token) {
    return res.status(401).json({ message: "Unauthorised" });
  }
  try {
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decodedUser.userId
    console.log("Inside auth middleware")
    next()
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = isAuth;
