// Imports the framework
const express = require("express");
// Imports cors package
const cors = require('cors')
// Creates an instance
const app = express();
var corsOptions = {
  origin: ["http://localhost:8080", "http://127.0.0.1:8080"], // You can add more as needed.
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// Allow CORS
app.use(cors(corsOptions));
// Allow incoming request object as a JSON Oject.
app.use(express.json());
// Mock database
const todos = [
  {
    title: "Todo 1",
    description: "Todo 1 description",
    is_completed: false,
    id: 1,
  },
  {
    title: "Todo 2",
    description: "Todo 2 description",
    is_completed: false,
    id: 2,
  },
];

/* 
    Retrieve todos. 
    Responds all todos in JSON format.
*/
app.get("/get-todos", (req, res) => {
  // Respond in JSON format
  res.json(todos);
});

/* 
    Add new todo. 
    
    Client have to pass title, description in the request body.
    Responds newly added todo in JSON format.
*/
app.post("/create-todo", (req, res) => {
  const todo = {
    title: req.body.title,
    description: req.body.description,
    is_completed: false,
    // Generates a random integer from 1 to 1000.
    id: Math.floor(Math.random() * 1000) + 1,
  };
  // Push to the end of the array
  todos.push(todo);
  res.json(todo);
});

/* 
    Update existing todo.
    Call this route with the ID of todo that you want to update.
    For example - If you want to update todo with an id of 1, 
    send the PUT request to this route /update-todo/1.
    
    Client have to pass title, description in the request body.
    Responds updated todo in JSON format.
*/
app.put("/update-todo/:id", (req, res) => {
  const id = req.params.id;
  // Find the index of the todo that's being updated.
  const index = todos.findIndex((todo) => todo.id == id);

  // If found, update it
  if (index >= 0) {
    todos[index].title = req.body.title;
    todos[index].description = req.body.description;
    todos[index].is_completed = req.body.is_completed;
    res.send(todos[index]);
  } else {
    // Not found, respond with error
    res.status(400).send("Todo not found.");
  }
});

/* 
    Delete todo.
    Call this route with the ID of todo that's being deleted.
    For example - If you want to delete todo with an id of 1, 
    send the DELETE request to this route /delete-todo/1.
    
    Responds deleted todo in JSON format.
*/
app.delete("/delete-todo/:id", (req, res) => {
  const id = req.params.id;
  // Find the index of the todo that's being deleted.
  const index = todos.findIndex((todo) => todo.id == id);

  // If found, delete it
  if (index >= 0) {
    todos.splice(index, 1);
    res.json(todos[index]);
  } else {
    // Not found, respond with error
    res.status(400).send("Todo not found.");
  }
});

// Listen for requests on this port
app.listen(3000, () => {
  console.log("App is now listening on Port 3000");
});
