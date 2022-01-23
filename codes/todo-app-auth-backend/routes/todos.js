const express = require("express");
const router = express.Router();
const Todos = require("../mock/todos.json"); // Mock database
const verifyToken = require("../middlewares/verifyToken.js"); // Middleware function
// Plug in the JWT strategy as a middleware so only verified users can access this route.
router.get("/", verifyToken, async (req, res) => {
  // We can safely access user's detail here since the middleware function was used to verify user's identity.
  const user = req.user;
  try {
    // Find todos created by user
    const todos = Todos.filter((todo) => todo.userId === user.id);
    // Respond the todos.
    res.status(200).json(todos);
  } catch (error) {
    // Catching error to prevent server crashes.
    console.error(error);
    res.status(400).json(error);
  }
});

// Plug in the JWT strategy as a middleware so only verified users can access this route.
router.post("/create", verifyToken, async (req, res) => {
  // We can safely access user's detail here since the middleware function was used to verify user's identity.
  const user = req.user;
  // Extract todos's title from request payload
  const { title } = req.body;
  try {
    const todo = {
      title: title,
      userId: user.id, // Attaching user id to todo
      id: new Date().valueOf().toString(), // Generate random id
    };

    Todos.push(todo);
    // Respond the todos.
    res.status(200).json(todo);
  } catch (error) {
    // Catching error to prevent server crashes.
    console.error(error);
    res.status(400).json(error);
  }
});
module.exports = router;
