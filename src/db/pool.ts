import mysql from "mysql";

export default mysql.createPool({
  password: "d95c5c5f",
  user: "b34c95e74e8730",
  database: "heroku_37ee2feeeafbb67",
  host: "eu-cdbr-west-03.cleardb.net",
  port: 3306,
});
