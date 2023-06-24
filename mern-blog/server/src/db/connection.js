const mongoose = require("mongoose");

const DB = "mongodb://localhost:27017/blog";

const connection = () => {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex:true
    })
    .then((res) => {
      console.log("db connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
module.exports = connection;
