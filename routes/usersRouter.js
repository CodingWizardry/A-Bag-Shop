const express = require("express");
const userModal = require("../models/user-modal");
const router = express.Router();
const bcrypt = require("bcrypt");
router.get("/", function (req, res) {
  res.send("Hello World");
});
router.post("/register", async function (req, res) {
  let { email, fullName, password } = req.body;
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      if (err) return res.send(err.message);
      else {
        let user = await userModal.create({
          email,
          fullName,
          password: hash,
        });
        let token = jwt.sign({email, id:user._id}, "hy");
        res.cookie("token" , token)
        res.send("User created successfully");
      }
    });
  });

  res.send(user);
});

module.exports = router;
