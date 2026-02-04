/**
 * Placeholder para imágenes. Sustituir por <Image> o <img> cuando haya assets.
 * Mantener el className del wrapper para conservar el espacio y aspecto.
 */
type ImagePlaceholderProps = {
  /** Proporción del bloque (ej: "video" = 16/9, "square" = 1/1) */
  aspectRatio?: "video" | "square" | "wide" | "portrait" | "auto";
  /** Etiqueta interna (solo desarrollo; ocultar en prod si se desea) */
  label?: string;
  /** Clases extra del contenedor */
  className?: string;
  /** Para identificar el slot al reemplazar por imagen real */
  slot?: string;
};

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  portrait: "aspect-[3/4]",
  auto: "",
};

export function ImagePlaceholder({
  aspectRatio = "video",
  label = "Imagen",
  className = "",
  slot,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-dashed border-border-strong bg-surface ${aspectClasses[aspectRatio]} ${className}`}
      data-image-slot={slot}
      aria-hidden
    >
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-xs font-medium text-foreground">{label}</span>
      </div>
    </div>
  );
}
