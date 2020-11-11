import { Router } from "express";
import categoryRouter from "./category";
import productRouter from "./product";
import userRouter from "./user";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/users", userRouter);
router.use("/categories", categoryRouter);
router.use("/products", productRouter);

// Export the base-router
export default router;
