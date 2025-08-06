// import aj from "../config/arcjet.js";

// const arcjetMiddleWare = async (req, res, next) => {
//   try {
//     const decisions = await aj.protect(req, { requested: 1 });
//     if (decisions.isDenied()) {
//       if (decisions.reason.isBot()) {
//         return res.status(429).json({ message: "Access denied for bots." });
//       }
//       if (decisions.reason.isRateLimit()) {
//         return res.status(403).json({ message: "Rate limit exceeded" });
//       }

//       res.status(403).json({ message: "Access Denied" });

//       next();
//     }
//   } catch (error) {
//     console.error(`Arcjet middleware error ${error}`);
//     next(error);
//   }
// };

// export default arcjetMiddleWare;
