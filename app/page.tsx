export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 32 }}>
      <h1>onecommand test app</h1>
      <p>
        Health: <a href="/api/health">/api/health</a>
      </p>
    </main>
  );
}
