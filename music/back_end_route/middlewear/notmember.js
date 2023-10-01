const Router = require("express").Router();
const connection = require("../mysqlDB");
Router.use((req, res, next) => {
  console.log("receiving notmember request");
  next();
});
// Router.post("/", (req, res) => {});
// Router.get("/", (req, res) => {});
module.exports = Router;
