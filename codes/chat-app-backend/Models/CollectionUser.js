const Mongoose = require("mongoose");

const Schema = new Mongoose.Schema(
  {
    name: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const User = Mongoose.model("users", Schema);

module.exports = User;
