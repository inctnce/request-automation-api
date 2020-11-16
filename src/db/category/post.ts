import pool from "../pool";
import Category from "../../types/Category";

export default function post(category: Category) {
  return new Promise((resolve, reject) => {
    pool.query(
      `
          INSERT INTO category
          VALUES
              ("${category.id}", "${category.name}", "${
        category.creator_id
      }", "${category
        .creation_date!.toISOString()
        .slice(0, 19)
        .replace("T", " ")}")
        `,
      [],
      (err) => {
        if (err) return reject(err);
        return resolve("category was inserted");
      }
    );
  });
}
