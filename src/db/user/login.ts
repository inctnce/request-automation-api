import pool from "../pool";
import User from "../../types/User";

export default function login(email: string): Promise<User> {
  console.log("123");
  return new Promise((resolve, reject) => {
    pool.query(
      `
        SELECT * FROM user 
        WHERE email="${email}"
        `,
      [],
      (e, results) => {
        if (e) return reject(e);
        return resolve(results[0]);
      }
    );
  });
}
