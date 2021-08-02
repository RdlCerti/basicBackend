import { Response } from "express";
// import { logger } from "./logger";

export function onSuccess(res: Response, data?: object, log = true): void {
  // if (process.env.NODE_ENV !== "test" && log) logger.info(JSON.stringify({ data }));
  res.status(200).json( data );
}

export function onCreated(res: Response, data?: object): void {
  // if (process.env.NODE_ENV !== "test") logger.info(JSON.stringify({ data }));
  res.status(201).json( data );
}

export function onBadRequest(res: Response, error: Error): void {
  // if (process.env.NODE_ENV !== "test") logger.error(JSON.stringify(error));
  res.status(400).json({ error: error.name, message: error.message });
}

export function onUnauthorized(res: Response): void {
  res.status(401).json({ error: "Unauthorized" });
}

export function onNotFound(res: Response): void {
  res.status(404).json({ error: "NotFound" });
}

export function onError(res: Response, error: Error): void {
//   if (process.env.NODE_ENV !== "test") logger.error(JSON.stringify(error));
  res.status(500).json( error );
}
