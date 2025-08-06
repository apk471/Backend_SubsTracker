import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp);
// authRouter.get("/sign-up", (req, res) => {
//   res.send({ title: "Sign Up" });
// });
authRouter.post("/sign-in", signIn);
authRouter.get("/sign-out", signOut);

export default authRouter;
