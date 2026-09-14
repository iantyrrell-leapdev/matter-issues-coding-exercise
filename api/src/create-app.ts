import express from "express";
import { getMatterHandler, listMattersHandler } from "./matter-routes";

export function createApiApp() {
  const app = express();
  app.get("/matters", listMattersHandler);
  app.get("/matters/:id", getMatterHandler);
  return app;
}
