const mongoose = require("mongoose");
require("dotenv").config();
const dbconnect = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
  });
  if (connect) {
    console.log("connection successful");
  } else {
    console.log("some database error");
  }
};

module.exports = dbconnect;
