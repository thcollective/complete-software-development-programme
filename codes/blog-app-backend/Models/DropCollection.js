const DB = require("../Mongoose");

const drop = async () => {
  await DB.Connect();
  await DB.mongoose.connection.db.dropCollection("blogs");
  await DB.Close();
};

drop();
