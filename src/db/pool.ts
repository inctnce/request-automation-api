import mysql from "mysql";

export default mysql.createPool({
  password: process.env.password,
  user: process.env.user,
  database: process.env.database,
  host: process.env.host,
  port: Number(String(process.env.port)),
});
