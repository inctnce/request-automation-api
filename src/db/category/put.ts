import pool from "../pool";
import Category from "../../types/Category";

export default function put(category: Category) {
  return new Promise((resolve, reject) => {
    pool.query(
      `
          UPDATE category SET name="${category.name}"
          WHERE id="${category.id}";

          SELECT * FROM category 
          WHERE id="${category.id}";
        `,
      [],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      }
    );
  });
}
