const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-modal");

router.get("/", function (req, res) {
  res.send("Hello World");
});

router.post("/create", async function (req, res) {
  let owners = ownerModel.find();   
  if (owners.length > 0) {
    return res.send(503).send("You dont have permission to create a new owner");
  }
  console.log("owners", owners)
  
  const { fullName, email, password } = req.body;
  let createdOwner = await ownerModel.create({
      fullName,
      email,
      password,
    });
    res.status(201).send(createdOwner);
});

module.exports = router;
