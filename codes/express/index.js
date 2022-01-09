// Imports the framework
const express = require("express");
// Creates an instance
const app = express();
// Imports the cors package
const cors = require("cors");

var corsOptions = {
  origin: ["http://localhost:5500", "http://127.0.0.1:5500"], // You can add more as needed.
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Tell our express instance we want to use this package
app.use(cors(corsOptions));

app.get("/get-todos", (req, res) => {
  const todos = {
    todos: [
      {
        title: "Todo 1",
        description: "Todo 1 description",
        is_completed: false,
      },
      {
        title: "Todo 2",
        description: "Todo 2 description",
        is_completed: false,
      },
    ],
  };
  res.json(todos);
});

// Listen on this port
app.listen(3000, () => {
  console.log("App is now listening on Port 3000");
});
