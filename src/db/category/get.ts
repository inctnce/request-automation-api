import Category from "../../types/Category";
import pool from "../pool";

export default function get(): Promise<Category[]> {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM category`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}
