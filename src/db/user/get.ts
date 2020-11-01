import User from "../../types/User";
import pool from "../pool";

export default function get(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM user`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}
