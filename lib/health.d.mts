export function buildHealth(env: Record<string, string | undefined>): {
  status: number;
  body: Record<string, unknown>;
};
