import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApiApp } from "./create-app";

const app = createApiApp();

describe("GET /matters", () => {
  it("returns a list of matters with id, title, and type", async () => {
    const res = await request(app).get("/matters");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);

    for (const matter of res.body) {
      expect(matter).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        type: expect.any(String),
      });
    }
  });
});

describe("GET /matters/:id", () => {
  it("returns the full matter for a listed id", async () => {
    const list = await request(app).get("/matters");
    const { id, title, type } = list.body[0];

    const res = await request(app).get(`/matters/${id}`);

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(id);
    expect(res.body.title).toBe(title);
    expect(res.body.matterType).toBe(type);
    expect(res.body.dates).toEqual(expect.any(Object));
    expect(Array.isArray(res.body.documents)).toBe(true);
    expect(Array.isArray(res.body.fileNotes)).toBe(true);
  });
});
