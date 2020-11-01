import pool from "../pool";
import User from "../../types/User";

export default function post(user: User) {
  return new Promise((resolve, reject) => {
    pool.query(
      `
          INSERT INTO user
          VALUES
              ("${user.id}", "${user.name}", "${user.email}", "${user.password}", "${user.canAddCategory}", "${user.canAddProduct}", "${user.creation_date}")
        `,
      [],
      (err) => {
        if (err) return reject(err);
        return resolve("user was inserted");
      }
    );
  });
}
