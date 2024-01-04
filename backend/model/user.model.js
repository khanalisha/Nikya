const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true, maxLength: 50 },
  avatar: { type: String},
  email: String,
  password: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
