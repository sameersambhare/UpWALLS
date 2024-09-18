const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const MongoUsername = process.env.MongoUsername;
const MongoPassword = process.env.MongoPassword;
mongoose.connect(`mongodb+srv://${MongoUsername}:${MongoPassword}@datacluster.9vl5m.mongodb.net/?retryWrites=true&w=majority&appName=DataCluster`);
mongoose.connection.on("connected", () => {
  console.log("Database Connected.");
});
mongoose.connection.on("error", () => {
  console.log("Database connection failed.");
});
require("./models/users");
app.use(express.json());
app.use(cors());
app.use(require("./routes/auth"));

app.use(express.static(path.join(__dirname, "./frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server starting on the port ${port}`);
});
