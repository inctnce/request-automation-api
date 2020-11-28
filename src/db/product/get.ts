import Product from "src/types/Product";
import pool from "../pool";

function formulateRequest(id?: string, key?: string): string {
  switch (key) {
    case "category":
      return `SELECT * FROM product WHERE category_id="${id}"`;
    case "creator":
      return `SELECT * FROM product WHERE creator_id="${id}"`;
  }

  return "SELECT * FROM product";
}

export default function get(id?: string, key?: string): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    pool.query(formulateRequest(id, key), (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}
