"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-xl font-semibold text-foreground">Algo salió mal</h1>
      <p className="max-w-md text-center text-sm text-muted-foreground">
        {error.message}
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
      >
        Reintentar
      </button>
    </div>
  );
}
