export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/30 py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:gap-6 sm:text-left">
          <p className="text-xs text-muted sm:text-sm" suppressHydrationWarning>
            © {year} Next Pulse. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-muted sm:gap-8 sm:text-sm">
            <a
              href="#"
              className="transition-colors hover:text-foreground"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="transition-colors hover:text-foreground"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
