const express = require("express");
const { getUsers, postUser } = require("./controllers/index.controller");
const app = express();
app.use(express.json());

app.get("/api/users", getUsers);
app.post("/api/users", postUser);

module.exports = app;
