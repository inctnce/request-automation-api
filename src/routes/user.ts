import User from "src/types/User";

import db from "src/db";
import tokenHandler from "./helpers/tokens";

import express from "express";
import bcrypt from "bcrypt";
import { v1 as uuidv1 } from "uuid";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

userRouter.post("/token", async (req: express.Request, res: express.Response) => {
  const data: any = await db.token.get(req.body.token);
  const refreshToken: string = data[0].token;

  if (refreshToken) {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!, (err: any, username: any) => {
      if (err) return res.sendStatus(403);
      const accessToken = tokenHandler.generateToken(username);
      console.log(accessToken);
      res.status(200).send({ accessToken: accessToken });
    });
  }
});

userRouter.delete("/logout", (req: express.Request, res: express.Response) => {
  db.token.delete(req.body.token);
  res.sendStatus(204);
});

userRouter.post("/login", async (req: express.Request, res: express.Response) => {
  try {
    const email: string = req.body.email;
    const password: string = req.body.password;

    const user: User = await db.user.login(email);

    if (user) {
      const isValid: boolean = await bcrypt.compare(password, user.password!);

      if (isValid) {
        console.log(user.name);
        const accessToken = tokenHandler.generateToken({ name: user.name });
        const refreshToken = jwt.sign(JSON.stringify(user), process.env.REFRESH_TOKEN_SECRET!);

        await db.token.post(refreshToken);

        user.accessToken = accessToken;
        user.refreshToken = refreshToken;
        user.password = "";

        res.status(200).send(user);
      }
    } else {
      res.status(400).send("Wrong email or password");
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

userRouter.post("/post", async (req: express.Request, res: express.Response) => {
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

userRouter.get("/get_users", tokenHandler.authenticateToken, async (_req: express.Request, res: express.Response) => {
  try {
    const result = await db.user.get();
    res.status(200).send(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

userRouter.delete(
  "/del/:user_id",
  tokenHandler.authenticateToken,
  async (req: express.Request, res: express.Response) => {
    try {
      await db.user.delete(req.params.user_id);
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(500);
    }
  }
);

userRouter.put("/put", async (req: express.Request, res: express.Response) => {
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
    const user = await db.user.put(data);
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

export default userRouter;
