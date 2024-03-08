const express = require("express");
const user = require("../Model/user");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newUser = new user(req.body);
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await user.find();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await user.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    res.send(result);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await user.findOneAndDelete({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
