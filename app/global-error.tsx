"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "system-ui", padding: "2rem", background: "#0f0f12", color: "#e5e5e5" }}>
        <h1 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Error en la aplicación</h1>
        <pre style={{ fontSize: "0.75rem", overflow: "auto", marginBottom: "1rem", color: "#f87171" }}>
          {error.message}
        </pre>
        <button
          type="button"
          onClick={() => reset()}
          style={{ padding: "0.5rem 1rem", cursor: "pointer", borderRadius: "0.5rem" }}
        >
          Reintentar
        </button>
      </body>
    </html>
  );
}
