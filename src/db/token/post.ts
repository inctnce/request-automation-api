import pool from "../pool";

export default function post(token: string) {
  return new Promise((resolve, reject) => {
    pool.query(
      `
          INSERT INTO token
          VALUES ("${token}")
        `,
      [],
      (err) => {
        if (err) return reject(err);
        return resolve("token was inserted");
      }
    );
  });
}