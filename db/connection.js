const mongoose = require("mongoose");

const mongoDB = process.env.DATABASE_URL;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;
