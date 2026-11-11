import { buildHealth } from "../../../lib/health.mjs";

// Read env at request time, not build time.
export const dynamic = "force-dynamic";

export function GET() {
  const { status, body } = buildHealth(process.env);
  return Response.json(body, { status });
}
