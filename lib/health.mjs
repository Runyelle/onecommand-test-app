/**
 * Builds the /api/health response. Never includes env values, only whether
 * they're configured.
 *
 * Test switch: set FORCE_UNHEALTHY=1 in a Vercel environment to make the
 * health route return 503 (used to test onecommand's health check).
 */
export function buildHealth(env) {
  if (env.FORCE_UNHEALTHY === "1") {
    return { status: 503, body: { ok: false, reason: "FORCE_UNHEALTHY is set" } };
  }
  return {
    status: 200,
    body: {
      ok: true,
      database: env.DATABASE_URL ? "configured" : "missing",
      environment: env.VERCEL_ENV ?? "local",
    },
  };
}
