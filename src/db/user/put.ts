import pool from "../pool";
import User from "../../types/User";

export default function put(user: User) {
  return new Promise((resolve, reject) => {
    pool.query(
      `
          UPDATE user SET name="${user.name}", email="${user.email}", password="${user.password}", canAddCategory="${user.canAddCategory}", "${user.canAddProduct}"
          WHERE id="${user.id}";

          SELECT * FROM user 
          WHERE id="${user.id}";
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
