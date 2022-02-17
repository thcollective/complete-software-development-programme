const router = require("express").Router();
const generateHash = require("../Helpers/hashPassword");
const ModelUser = require("../Models/CollectionUser");
const comparePassword = require("../Helpers/comparePassword");
const generateToken = require("../Helpers/generateToken");
const verifyToken = require('../Middlewares/verifyToken')

// READ USERS
router.get("/", verifyToken, async (req, res) => {
  try {
    const users = await ModelUser.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verifying required fields
    if (!email) {
      throw "Email is needed.";
    }

    if (!password) {
      throw "Password is needed.";
    }

    // Find the user in the db
    const Response = await ModelUser.findOne({ email: email });
    if (!Response) {
      throw "You don't have an account yet. Please register first.";
    }

    const User = Response.toJSON();

    // Compare passwords
    const Result = await comparePassword(password, User.password);
    if (!Result) {
      throw "Wrong password.";
    }

    // Generate JWT Token
    const Token = await generateToken(User);
    if (!Token) {
      throw "Error generating token.";
    }

    res.status(200).json({
      jwt: Token,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
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

    const hashedPassword = await generateHash(password);

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
