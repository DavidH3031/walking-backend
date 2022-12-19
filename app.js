const express = require("express");
const {
  postUser,
  getUserById,
  removeUser,
} = require("./controllers/index.controller");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/api/users/:user_id", getUserById);
app.post("/api/users", postUser);
app.delete("/api/users/:user_id", removeUser);

module.exports = app;
