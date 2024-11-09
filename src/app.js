import express from "express";
import morgan from "morgan";
import tasksRouter from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ORIGIN } from "./config.js";

const app = express();

//middleware
app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api", tasksRouter);
app.use("/api", authRoutes); //authentications routes....!

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "Error",
    message: err.message,
  });
});

export default app;
