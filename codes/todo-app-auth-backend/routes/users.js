const express = require("express");
const router = express.Router();
const Users = require("../mock/users.json"); // Mock database
const generateHash = require("../helpers/hashPassword.js"); // helper function
const generateToken = require("../helpers/generateToken.js"); // helper function
const comparePassword = require("../helpers/comparePassword.js"); // helper function

router.post("/register", async (req, res) => {
  // Extract user's name, email & password from request payload
  const { name, email, password } = req.body;
  try {
    // Verifying required fields
    if (!name) {
      throw "Name is needed";
    }

    if (!email) {
      throw "Email is needed";
    }

    if (!password) {
      throw "Password is needed";
    }
    // Generate hashed password
    const hashedPassword = await generateHash(password);

    const User = {
      name: name,
      email: email,
      password: hashedPassword, // Storing hashed password instead of raw
      id: new Date().valueOf().toString(), // Generate random id
    };
    // Create & store user in our mock db.
    const Response = Users.push(User);

    // Generate JWT Token
    const Token = await generateToken(User);
    if (!Token) {
      throw "Error generating token.";
    }

    // Respond the token. Client will use this to access protected routes
    res.status(200).json({
      jwt: Token,
    });
  } catch (error) {
    // Catching error to prevent server crashes.
    console.error(error);
    res.status(400).json(error);
  }
});

router.post("/login", async (req, res) => {
  // Extract user's email & password from request payload
  const { email, password } = req.body;
  try {
    // Verifying required fields
    if (!email) {
      throw "Email is needed";
    }

    if (!password) {
      throw "Password is needed";
    }

    // Find user in our mock db
    const User = Users.filter((user) => user.email === email)[0];
    if (!User) {
      throw "User doesn't exist.";
    }

    // Compare passwords
    const Result = await comparePassword(User.password, password);
    if (!Result) {
      throw "Password doesn't match.";
    }

    // Generate JWT token
    const Token = await generateToken(User);
    if (!Token) {
      throw "Error generating token.";
    }

    // Respond the token. Client will use this to access protected routes
    res.status(200).json({
      jwt: Token,
    });
  } catch (error) {
    // Catching error to prevent server crashes.
    console.error(error);
    res.status(400).json(error);
  }
});
module.exports = router;
