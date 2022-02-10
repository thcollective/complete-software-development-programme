const router = require("express").Router();
const generateHash = require("../Helpers/hashPassword");
const ModelUser = require("../Models/CollectionUser");

// READ USERS
router.get("/", async (req, res) => {
  try {
    const users = await ModelUser.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// CREATE USER
router.post("/", async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    //   Verify required fields
    if (!username) {
      throw "Username is needed.";
    }

    if (!email) {
      throw "Email is needed.";
    }

    if (!password) {
      throw "Password is needed.";
    }


    const hashedPassword = await generateHash(password)
    
    const user = new ModelUser({
      name: name,
      username: username,
      email: email,
      password: hashedPassword,
    });

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    // Update user
    await ModelUser.updateOne({ _id: id }, { $set: { name: name } });

    // Query user
    const user = await ModelUser.find({ _id: id });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Delete user
    await ModelUser.deleteOne({ _id: id });
    res.status(200).json("Ok");
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
