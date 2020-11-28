import express, { Router } from "express";
import db from "../db";
import Demand from "src/types/Demand";
import { v1 as uuidv1 } from "uuid";

const demandRouter: Router = express.Router();

demandRouter.post("/post", async (req, res) => {
  const data: Demand = {
    id: uuidv1(),
    name: req.body.name,
    products: req.body.products,
    total_cost: req.body.total_cost,
    deadlines: req.body.deadlines,
    address: req.body.address,
    financing_source: req.body.financing_source,
    contact_person: req.body.contact_person,
    responsible_person: req.body.responsible_person,
    creator_id: req.body.creator_id,
    creation_date: new Date(),
  };
  try {
    await db.demand.post(data);
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

demandRouter.get("/get/:creator_id", async (req, res) => {
  try {
    const demands: Demand[] = await db.demand.get(req.params.creator_id);
    res.status(200).send(demands);
  } catch (error) {
    console.log(error);
    res.sendStatus(503);
  }
});

demandRouter.put("/put", async (req, res) => {
  const data: Demand = {
    id: req.body.id,
    name: req.body.name,
    products: req.body.products,
    total_cost: req.body.total_cost,
    deadlines: req.body.deadlines,
    address: req.body.address,
    financing_source: req.body.financing_source,
    contact_person: req.body.contact_person,
    responsible_person: req.body.responsible_person,
  };
  try {
    const demand = await db.demand.put(data);
    res.status(200).send(demand);
  } catch (error) {
    console.log(error);
    res.sendStatus(503);
  }
});

demandRouter.delete("/delete/:demand_id", async (req, res) => {
  try {
    await db.product.delete(req.params.demand_id);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

export default demandRouter;
