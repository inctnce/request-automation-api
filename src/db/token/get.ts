import pool from "../pool";

export default function post(token: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    pool.query(
      `
          SELECT * FROM token
          WHERE token = "${token}"
        `,
      [],
      (err, results) => {
        if (err) return reject(undefined);
        return resolve(results);
      }
    );
  });
}
