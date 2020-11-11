import Product from "src/types/Product";
import pool from "../pool";

export default function get(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM product`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}
