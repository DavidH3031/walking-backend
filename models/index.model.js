const mongoose = require("mongoose");
const db = require("../db/connection");
const { User } = require("./User");

function insertUser(user) {
  const newUser = new User(user);
  return newUser.save();
}

module.exports = { insertUser };
