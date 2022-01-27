const Mongoose = require("mongoose");
class DB {
  constructor() {
    this.mongoose = Mongoose;
  }

  async Connect() {
    const uri =
      "mongodb+srv://admin:Admin123@cluster.xhwbp.mongodb.net/database?retryWrites=true&w=majority";
    const connection = await new Promise((resolve, reject) => {
      Mongoose.connect(
        uri,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (error, result) => {
          if (error) reject(result);

          this.mongoose = result;
          resolve(this.mongoose);
        }
      );
    });

    return connection;
  }

  async Close() {
    await this.mongoose.connection.close();
  }
}

const Instance = new DB();
module.exports = Instance;
