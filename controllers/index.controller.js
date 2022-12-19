const { insertUser } = require("../models/index.model");

exports.getUsers = (req, res, next) => {};

exports.postUser = (req, res, next) => {
  const user = req.body;
  console.log(user);
  insertUser(user).then((newUser) => {
    console.log(newUser);
  });
};
