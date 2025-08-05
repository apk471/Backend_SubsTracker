import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import subsRoutes from "./routes/subscription.routes.js";
import connectToDB from "./database/mongodb.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/subscriptions", subsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Tracker API");
});

app.listen(PORT, () => {
  console.log(`Tracker API running on port http://localhost:${PORT}`);

  connectToDB();
});

export default app;
