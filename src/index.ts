import express from "express";
import cors from "cors";

import user_routes from "./routes/user";

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", user_routes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
