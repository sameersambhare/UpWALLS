const express = require("express");
const router = express.Router();
const USER = require("../models/users");
router.get("/profile", (req, res) => {
  res.json({ message: "Profile" });
});
module.exports = router;
