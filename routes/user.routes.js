import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controllers.js";
import authorize from "../middleware/auth.middleware.js";

const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.get("/:id", authorize, getUser);
userRoutes.post("/", (req, res) => {
  res.send({ title: "CREATE user" });
});
userRoutes.put("/", (req, res) => {
  res.send({ title: "UPDATE user" });
});
userRoutes.delete("/:id", (req, res) => {
  res.send({ title: "DELETE user" });
});

export default userRoutes;
