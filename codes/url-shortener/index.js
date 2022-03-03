const express = require("express");
const ControllerURL = require("./Controllers/ControllerURL");
const app = express();

app.use(express.json());
// Prefixed
app.use("/url", ControllerURL);

app.listen(3000, () => {
  console.log("🚀 Listening on Port 3000");
});
