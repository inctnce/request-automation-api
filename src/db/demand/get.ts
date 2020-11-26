import Demand from "src/types/Demand";
import pool from "../pool";

export default function get(): Promise<Demand[]> {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM demand`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}
