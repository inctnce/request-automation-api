import express, { Router } from "express";
import { v1 as uuidv1 } from "uuid";
import bcrypt from "bcrypt";
import User from "../types/User";
import db from "../db";

const userRouter: Router = express.Router();

userRouter.post("/post", async (req, res) => {
  try {
    const data: User = {
      id: uuidv1(),
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      canAddCategory: req.body.canAddCategory,
      canAddProduct: req.body.canAddProduct,
      creation_date: req.body.creation_date,
    };

    await db.user.register(data);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const email: string = req.body.email;
    const password: string = req.body.password;

    const user: User = await db.user.login(email);

    if (user) {
      const isValid: boolean = await bcrypt.compare(password, user.password);

      if (isValid) res.status(200).send(user);
    } else {
      res.status(400).send("Wrong email or password");
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

userRouter.get("/get_users", async (_req, res) => {
  try {
    const result = await db.user.get();
    res.status(200).send(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

userRouter.delete("/del/:user_id", async (req, res) => {
  try {
    await db.user.del(req.params.user_id);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

userRouter.put("/put", async (req, res) => {
  const data: User = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    canAddCategory: req.body.canAddCategory,
    canAddProduct: req.body.canAddProduct,
    creation_date: req.body.creation_date,
  };

  try {
    await db.user.put(data);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e);
  }
});

export default userRouter;
