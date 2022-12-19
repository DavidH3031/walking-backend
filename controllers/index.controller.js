const { insertUser } = require("../models/index.model");

exports.getUsers = (req, res, next) => {};

exports.postUser = (req, res, next) => {
  const user = req.body;
  insertUser(user)
    .then((newUser) => {
      console.log(newUser);
      res.status(201).send(newUser);
    })
    .catch(next);
};
