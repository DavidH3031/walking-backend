const express = require("express");
const { postUser, getUserById } = require("./controllers/index.controller");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/api/users/:user_id", getUserById);
app.post("/api/users", postUser);

module.exports = app;
