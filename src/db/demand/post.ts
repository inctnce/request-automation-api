import pool from "../pool";
import Demand from "../../types/Demand";

export default function post(demand: Demand) {
  return new Promise((resolve, reject) => {
    pool.query(
      `
          INSERT INTO demand
          VALUES
              ("${demand.id}", "${demand.name}", '${demand.products}', "${demand.total_cost}",
               "${demand.deadlines}", "${demand.address}", "${demand.financing_source}",
               "${demand.contact_person}", "${demand.responsible_person}", "${demand.creator_id}",
               "${demand.creation_date!.toISOString().slice(0, 19).replace("T", " ")}")
        `,
      [],
      (err) => {
        if (err) return reject(err);
        return resolve("product was inserted");
      }
    );
  });
}
