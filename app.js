import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import subsRoutes from "./routes/subscription.routes.js";
import connectToDB from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
// import arcjetMiddleWare from "./middleware/arcjet.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(arcjetMiddleWare);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/subscriptions", subsRoutes);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to Tracker API");
});

app.listen(PORT, () => {
  console.log(`Tracker API running on port http://localhost:${PORT}`);

  connectToDB();
});

export default app;
