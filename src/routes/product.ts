import express, { Router } from "express";
import db from "../db";
import Product from "src/types/Product";
import { v1 as uuidv1 } from "uuid";

const productRouter: Router = express.Router();

productRouter.post("/post", async (req, res) => {
  const data: Product = {
    id: uuidv1(),
    name: req.body.name,
    specs: req.body.specs,
    values: req.body.values,
    price: req.body.price,
    extra_info: req.body.extra_info,
    category_id: req.body.category_id,
    creator_id: req.body.creator_id,
    creation_date: new Date(),
  };
  try {
    await db.product.post(data);
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

productRouter.get("/get", async (_req, res) => {
  try {
    const products: Product[] = await db.product.get();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(503);
  }
});

productRouter.put("/put", async (req, res) => {
  const data: Product = {
    id: req.body.id,
    name: req.body.name,
    specs: req.body.specs,
    values: req.body.values,
    price: req.body.price,
    extra_info: req.body.extra_info,
    category_id: req.body.category_id,
  };
  try {
    const product = await db.product.put(data);
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(503);
  }
});

productRouter.delete("/delete/:product_id", async (req, res) => {
  try {
    await db.product.delete(req.params.product_id);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

export default productRouter;
