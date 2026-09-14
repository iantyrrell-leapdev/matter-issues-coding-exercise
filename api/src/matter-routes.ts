import type { Request, Response } from "express";
import { matters } from "./data/matter-source-data";

type MatterSummary = { id: string; title: string; type: string };

export function listMattersHandler(_req: Request, res: Response) {
  const summaries: MatterSummary[] = matters.map(({ id, title, matterType }) => ({
    id,
    title,
    type: matterType,
  }));
  res.json(summaries);
}

export function getMatterHandler(req: Request, res: Response) {
  const matter = matters.find((item) => item.id === req.params.id);

  // TODO: add error handling here

  res.json(matter);
}
