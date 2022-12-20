const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  displayName: { type: String, required: true },
  uid: { type: String, required: true, unique: true },
  coins: { type: Number, required: true, default: 100 },
  trophies: { type: Array, required: true, default: [] },
  quests: { type: Array, required: true, default: [] },
});

exports.User = mongoose.model("User", UserSchema);
