import express, { Router } from "express";
import db from "../db";
import Category from "src/types/Category";
import { v1 as uuidv1 } from "uuid";

const categoryRouter: Router = express.Router();

export default categoryRouter;

categoryRouter.post("/post", async (req, res) => {
  const data: Category = {
    id: uuidv1(),
    name: req.body.name,
    creator_id: req.body.creator_id,
    creation_date: new Date(),
  };
  try {
    await db.category.post(data);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

categoryRouter.get("/get", async (_req, res) => {
  try {
    const categories: Category[] = await db.category.get();
    res.status(200).send(categories);
  } catch (error) {
    console.log(error);
    res.sendStatus(503);
  }
});

categoryRouter.put("/put", async (req, res) => {
  const data: Category = {
    id: req.body.id,
    name: req.body.name,
    creator_id: req.body.creator_id,
    creation_date: req.body.creation_date,
  };
  try {
    const category = await db.category.put(data);
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.sendStatus(503);
  }
});

categoryRouter.delete("/delete/:category_id", async (req, res) => {
  try {
    await db.category.delete(req.params.category_id);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});
