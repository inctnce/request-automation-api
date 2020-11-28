import Product from "src/types/Product";
import pool from "../pool";

export default function get(category_id?: string): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    pool.query(
      category_id ? `SELECT * FROM product WHERE category_id="${category_id}"` : `SELECT * FROM product`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
}
