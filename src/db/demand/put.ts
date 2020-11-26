import pool from "../pool";
import Demand from "../../types/Demand";

export default function put(demand: Demand) {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        UPDATE demand SET name="${demand.name}", products="${demand.products}",
                           total_cost="${demand.total_cost}", deadlines="${demand.deadlines}",
                           address="${demand.address}", financing_source="${demand.financing_source}",
                           contact_person="${demand.contact_person}", responsible_person="${demand.responsible_person}",

        WHERE id="${demand.id}";

        SELECT * FROM demand 
        WHERE id="${demand.id}";
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
