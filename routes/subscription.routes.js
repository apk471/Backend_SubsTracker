import { Router } from "express";
import {
  createSubs,
  getUserSubscriptions,
} from "../controllers/subscriptions.controllers.js";
import authorize from "../middleware/auth.middleware.js";

const subsRoutes = Router();

subsRoutes.get("/", (req, res) => {
  res.send({ title: "GET ALL SUBS details" });
});

subsRoutes.get("/:id", (req, res) => {
  res.send({ title: "GET user subs details" });
});

subsRoutes.post("/", authorize, createSubs);

subsRoutes.post("/:id", (req, res) => {
  res.send({ title: "CREATE user subs details" });
});

subsRoutes.put("/:id", (req, res) => {
  res.send({ title: "UPDATE sub details" });
});

subsRoutes.delete("/:id", (req, res) => {
  res.send({ title: "DELETE Sub details" });
});

subsRoutes.get("/user/:id", authorize, getUserSubscriptions);
subsRoutes.put("/:id/cancel", (req, res) => {
  res.send({ title: "Cancel user sub details" });
});

subsRoutes.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET all upcoming user sub renewals" });
});

export default subsRoutes;
