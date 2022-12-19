const {
  insertUser,
  fetchUserById,
  deleteUserById,
} = require("../models/index.model");

exports.getUserById = (req, res, next) => {
  const { user_id } = req.params;
  fetchUserById(user_id)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

exports.postUser = (req, res, next) => {
  const user = req.body;
  insertUser(user)
    .then((newUser) => {
      res.status(201).send(newUser);
    })
    .catch(next);
};

exports.removeUser = (req, res, next) => {
  const { user_id } = req.params;
  deleteUserById(user_id)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};
