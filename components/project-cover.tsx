import type { Project } from "@/content/site"

/**
 * Designed gradient cover for projects without a screenshot — a quiet
 * mono glyph over a soft accent gradient. Avoids placeholder imagery.
 */
export function ProjectCover({ cover, title }: { cover: NonNullable<Project["cover"]>; title: string }) {
  return (
    <div
      role="img"
      aria-label={`${title} cover`}
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(120% 120% at 20% 0%, ${cover.from}22, transparent 60%), radial-gradient(120% 120% at 100% 100%, ${cover.to}22, transparent 55%), var(--card-bg)`,
      }}
    >
      {/* faint grid lines for depth */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--hairline) 1px, transparent 1px), linear-gradient(90deg, var(--hairline) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(120% 80% at 50% 40%, black, transparent 80%)",
        }}
      />
      <span
        className="font-mono text-5xl font-semibold tracking-tight"
        style={{
          color: "transparent",
          backgroundImage: `linear-gradient(135deg, ${cover.from}, ${cover.to})`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        {cover.glyph}
      </span>
    </div>
  )
}
