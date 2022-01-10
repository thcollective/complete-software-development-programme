/* 
CRUD
CREATE
READ
UPDATE
DELETE
*/
const express = require("express");

const cors = require("cors");

const app = express();

const port = 5000;

app.use(cors());

/* This is a root route. What do we want to do here? */
app.get("/", (req, res) => {});

/* Here, you need to READ todos from the database & respond. */
app.get("/todos", (req, res) => {});

app.listen(port, () => {
  console.log("🚀 Server is now listening at " + port);
});
