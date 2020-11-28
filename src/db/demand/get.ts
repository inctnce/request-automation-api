import Demand from "src/types/Demand";
import pool from "../pool";

export default function get(creator_id?: string): Promise<Demand[]> {
  return new Promise((resolve, reject) => {
    pool.query(
      creator_id ? `SELECT * FROM demand WHERE creator_id="${creator_id}"` : `SELECT * FROM demand`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
}
