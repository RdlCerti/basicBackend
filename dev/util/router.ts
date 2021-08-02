import * as express from "express";
import { onNotFound } from "./handlers";

export function setupRouter(): express.Router {
  const router = express.Router();

  // Add root route
  router.route("/").get((req, res) => res.status(200).json({ response: "OK" }));

  // setup routes

  // Add default NotFound (404) least
  router.use((req, res) => onNotFound(res));

  return router;
}

export default setupRouter;