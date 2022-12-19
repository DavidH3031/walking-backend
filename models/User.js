const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  uid: { type: String, required: true },
});

exports.User = mongoose.model("User", UserSchema);