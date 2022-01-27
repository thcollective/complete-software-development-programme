const router = require("express").Router();
const Collection = require("../Models/CollectionBlog");

router.get("/", async (req, res) => {
  try {
    // Query blogs
    const Blogs = await Collection.find({});

    res.status(200).json(Blogs);
  } catch (error) {
    console.error(error);
    res.status(400).json("Error querying blogs");
  }
});

router.get("/:blog_id", async (req, res) => {
  const { blog_id } = req.params;
  try {
    // Query blog by id
    const Blog = await Collection.find({
      _id: blog_id,
    });

    res.status(200).json(Blog);
  } catch (error) {
    console.error(error);
    res.status(400).json("Error querying blog");
  }
});

router.post("/create", async (req, res) => {
  const { image, title, body } = req.body;
  try {
    // Verifying required fields
    if (!image) {
      throw "Image is needed";
    }

    if (!title) {
      throw "Title is needed";
    }

    if (!body) {
      throw "Body is needed";
    }

    // Store blog in the db
    const Blog = new Collection({
      image: image,
      title: title,
      body: body,
    });

    await Blog.save();

    res.status(200).json(Blog);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

router.put("/update/:blog_id", async (req, res) => {
  const { blog_id } = req.params;
  const { image, title, body } = req.body;

  try {
    // Verifying required fields
    if (!image) {
      throw "Image is needed";
    }

    if (!title) {
      throw "Title is needed";
    }

    if (!body) {
      throw "Body is needed";
    }
    // Update blog by id
    await Collection.updateOne(
      {
        _id: blog_id,
      },
      {
        $set: { image: image, title: title, body: body },
      }
    );

    // Query blog by id
    const Blog = await Collection.find({
      _id: blog_id,
    });

    res.status(200).json(Blog);
  } catch (error) {
    console.error(error);
    res.status(400).json("Error updating blog");
  }
});

router.delete("/:blog_id", async (req, res) => {
  const { blog_id } = req.params;
  try {
    // Delete blog by id
    await Collection.deleteOne({
      _id: blog_id,
    });

    res.status(200).json("Ok");
  } catch (error) {
    console.error(error);
    res.status(400).json("Error deleting blog");
  }
});

module.exports = router;
