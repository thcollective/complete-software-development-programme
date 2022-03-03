const express = require("express");
const ModelURL = require("../Models/ModelURL");
const router = express.Router();
// Create URLs
router.post("/", (req, res) => {
  const { url } = req.body;
  try {
    // Verify if they pass the link
    if (!url) {
      throw "You need to give me the link!";
    }
    const NewURL = new ModelURL(url);
    NewURL.write();
    res.json(NewURL);
  } catch (e) {
    console.error(e);
    res.status(400).json(e);
  }
});

// Redirect
router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    // Verify if the have valid id
    if (!id) {
      throw "Please give me the ID!";
    }

    const URL = ModelURL.findOne(id);

    if (!URL) {
      throw "No URL Found.";
    }
    return res.redirect(URL.url);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

module.exports = router;
