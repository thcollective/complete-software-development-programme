const express = require("express");
const cors = require("cors");
const routesUser = require("./routes/users.js");
const routesTodos = require("./routes/todos.js");
const app = express();
// Allow incoming request object as a JSON Oject.
app.use(express.json());
// Allow CORS
app.use(cors());
app.use("/users", routesUser);
app.use("/todos", routesTodos);

// Listen on port 5000
app.listen(5000, () => {
  console.log(`🚀 Listening on port 5000`);
});