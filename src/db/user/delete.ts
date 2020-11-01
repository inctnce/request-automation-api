import pool from "../pool";

export default function del(id: string) {
  return new Promise((resolve, reject) => {
    pool.query(
      `
          DELETE FROM user
          WHERE id="${id}"
        `,
      [],
      (err) => {
        if (err) {
          console.log(err);
          return reject(err);
        }
        return resolve(`User with id ${id} was deleted`);
      }
    );
  });
}
