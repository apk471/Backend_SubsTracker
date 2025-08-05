import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
  res.send({ title: "GET ALL USERS" });
});
userRoutes.get("/:id", (req, res) => {
  res.send({ title: "GET user details" });
});
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
