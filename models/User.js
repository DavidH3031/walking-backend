const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true },
  uid: { type: String, required: true, unique: true },
});

exports.User = mongoose.model("User", UserSchema);
