const express = require("express");
const UserRoutes = require("./Controllers/ControllerUser");
const app = express();
const Mongoose = require("mongoose");

Mongoose.connect(
  "mongodb://localhost:27017/dbTest",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, result) => {
    if (error) return;
    console.log("Connected to the database successfully");
  }
);

app.use(express.json());

app.use("/users", UserRoutes);

app.listen(5000, () => {
  console.log("🚀 Listening on Port 5000");
});
