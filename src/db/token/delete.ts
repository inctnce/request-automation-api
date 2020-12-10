import pool from "../pool";

export default function post(token: string) {
  return new Promise((resolve, reject) => {
    pool.query(
      `
          DELETE FROM token
          WHERE token = "${token}"
        `,
      [],
      (err) => {
        if (err) return reject(err);
        return resolve("token was deleted");
      }
    );
  });
}
