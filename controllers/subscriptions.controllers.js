import { SERVER_URL } from "../config/env.js";
import { workflowClient } from "../config/upstash.js";
import Subscription from "../models/subscription.models.js";

export const createSubs = async (req, res, next) => {
  try {
    const subs = await Subscription.create({
      ...req.body,
      user: req.user._id, // Assuming user ID is available in req.user
    });

    await workflowClient.trigger({
      url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
      body: {
        subscriptionId: subs.id,
      },
      headers: {
        "content-type": "application/json",
      },
      retries: 0,
    });

    res.status(201).json({
      message: "Subscription created successfully",
      data: subs,
      success: true,
    });
  } catch (error) {
    console.error("Subscription middleware error:", error);
    next(error);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
  try {
    // console.log("Fetching subscriptions for user:", req.user.id);
    if (req.params.id !== req.user.id) {
      const error = new Error("Unauthorized access to user subscriptions");
      error.status = 403;
      throw error;
    }

    const subscriptions = await Subscription.find({ user: req.params.id });
    res.status(200).json({
      message: "User subscriptions fetched successfully",
      data: subscriptions,
    });
  } catch (error) {
    // console.error("Error fetching user subscriptions:", error);
    next(error);
  }
};
