import { test } from "node:test";
import assert from "node:assert/strict";
import { buildHealth } from "./health.mjs";

test("healthy by default", () => {
  const r = buildHealth({ DATABASE_URL: "mysql://u:p@h/db", VERCEL_ENV: "preview" });
  assert.equal(r.status, 200);
  assert.deepEqual(r.body, { ok: true, database: "configured", environment: "preview" });
});

test("never leaks env values", () => {
  const r = buildHealth({ DATABASE_URL: "mysql://u:secret@h/db" });
  assert.ok(!JSON.stringify(r).includes("secret"));
});

test("FORCE_UNHEALTHY returns 503", () => {
  assert.equal(buildHealth({ FORCE_UNHEALTHY: "1" }).status, 503);
});
