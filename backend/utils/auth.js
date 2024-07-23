const jwt = require("jsonwebtoken");

const generateToken = (id, isAdmin) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }
  return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = generateToken;
