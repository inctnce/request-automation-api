import pool from "../pool";
import Product from "../../types/Product";

export default function post(product: Product) {
  return new Promise((resolve, reject) => {
    pool.query(
      `
          INSERT INTO product
          VALUES
              ("${product.id}", "${product.name}", "${product.specs}", "${product.values}", 
               "${product.price}", "${product.extra_info}", "${product.category_id}", 
               "${product.creator_id}", "${product.creation_date!.toISOString().slice(0, 19).replace("T", " ")}")
        `,
      [],
      (err) => {
        if (err) return reject(err);
        return resolve("product was inserted");
      }
    );
  });
}
