const JWT = require("jsonwebtoken");
const generateToken = async (user) => {
  // Remove password field
  if (user.password) {
    delete user.password;
  }

  const signedJWT = await new Promise((resolve, reject) => {
    JWT.sign(user, "TOP_SECRET", { expiresIn: "3h" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });

  return signedJWT;
};

module.exports = generateToken;