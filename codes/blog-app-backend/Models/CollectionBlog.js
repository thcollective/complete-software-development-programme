const Mongoose = require("mongoose");

const Blog = Mongoose.model(
  "blogs",
  new Mongoose.Schema(
    {
      image: { type: String, required: true },
      title: { type: String, required: true },
      body: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Blog;
