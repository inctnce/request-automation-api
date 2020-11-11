import pool from "../pool";
import Product from "../../types/Product";

export default function put(product: Product) {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        UPDATE product SET name="${product.name}", specs="${product.specs}"
                           values="${product.values}", price="${product.price}",
                           extra_info="${product.extra_info}", 
                           category_id="${product.category_id}",
        WHERE id="${product.id}";

        SELECT * FROM product 
        WHERE id="${product.id}";
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