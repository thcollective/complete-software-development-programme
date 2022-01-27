const DB = require("../Mongoose");
const Blog = require("./CollectionBlog");

const create = async () => {
  await DB.Connect();
  await Blog.createCollection();
  await DB.Close();
};

create();
