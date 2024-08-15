const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
const mongoUrl = process.env.MongoUrl;
mongoose.connect(mongoUrl);
mongoose.connection.on("connected", () => {
  console.log("Database Connected.");
});
mongoose.connection.on("error", () => {
  console.log("Database connection failed.");
});
require('./models/users')
app.use(express.json());
app.use(cors());
app.use(require('./routes/auth'))
app.listen(port, () => {
  console.log(`Server starting on the port ${port}`);
});
