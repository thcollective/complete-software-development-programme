const jwt = require("jsonwebtoken");
// Defining the middleware
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  try {
    const decoded = jwt.verify(token, "TOP_SECRET");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json(err);
  }
};

module.exports = verifyToken;