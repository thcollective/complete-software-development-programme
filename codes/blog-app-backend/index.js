const Express = require("express");
const CORS = require("cors");
const RoutesBlog = require("./Routes/Blogs.js");
const DB = require("./Mongoose");
const App = Express();
App.use(Express.json());
App.use(CORS());
const start = async () => {
  await DB.Connect();
  App.use("/blogs", RoutesBlog);
  App.listen(5000, () => {
    console.log(`🚀 Listening on port 5000`);
  });
  // await Server.close();
};

start();
