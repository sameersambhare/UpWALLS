const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  password: {
    type: String,
    required:true,
  },
});
module.exports = mongoose.model("USER", userSchema);
