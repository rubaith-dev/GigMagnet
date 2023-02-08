import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/AuthRoutes.js";
import cookieParser from "cookie-parser";
import { errorHandlerMiddleware } from "./middlewares/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: [process.env.PUBLIC_URL],
    method: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
