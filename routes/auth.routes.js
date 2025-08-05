import { Router } from "express";

const authRouter = Router();

authRouter.get("/sign-up", (req, res) => {
  res.send({ title: "SIGN-UP Message" });
});
authRouter.get("/sign-in", (req, res) => {
  res.send({ title: "SIGN-IN Message" });
});
authRouter.get("/sign-out", (req, res) => {
  res.send({ title: "SIGN-OUT Message" });
});

export default authRouter;
