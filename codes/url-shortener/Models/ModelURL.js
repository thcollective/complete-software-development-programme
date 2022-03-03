const fs = require("fs");
const shortid = require("shortid");
class ModelURL {
  static BaseURL = "http://localhost:3000/url";
  static FilePath = "./db/db.json";

  // Return all urls in the db.json
  static findAll() {
    const data = fs.readFileSync(ModelURL.FilePath, { encoding: "utf-8" });
    const json = JSON.parse(data);
    return json;
  }

  //   Find a url by ID in the db.json and return
  static findOne(id) {
    const URLs = this.findAll();
    const ModelURL = URLs.filter((url) => url.id === id)[0];
    return ModelURL;
  }

  constructor(url) {
    this.url = url;
    this.id = shortid.generate();
    this.short_url = `${ModelURL.BaseURL}/${this.id}`;
    this.created_at = new Date().toUTCString();
    this.updated_at = new Date().toUTCString();
  }

  write() {
    const URLs = ModelURL.findAll();
    const data = [...URLs, this];
    fs.writeFileSync(ModelURL.FilePath, JSON.stringify(data));
  }
}

module.exports = ModelURL;
