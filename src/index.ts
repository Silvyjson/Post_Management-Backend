import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

import Routes from "./routes/routes";
import { Documentation } from "./documentation";
import { swaggerConfig } from "./swaggerConfig";


const app = express();

swaggerConfig(app);

app.use(express.json({ limit: "50mb" }));
app.use(cors({ origin: "*" }));
app.use(helmet());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGODB_URL as string;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Mongodb connected and server is running on port ${PORT}`);
    });
  })
  .catch((error: any) => console.log(error.message));

app.get("/", (req: Request, res: Response) => {
  res.send(Documentation);
});

app.use("/api/", Routes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});
