import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionSurface from "@/components/ui/SectionSurface";

interface StorySectionProps {
  videoSrc: string;
  posterSrc: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  bgClass?: "bg-white" | "bg-gray-50";
}

export default function StorySection({
  videoSrc,
  posterSrc,
  eyebrow,
  title,
  description,
  bgClass = "bg-white",
}: StorySectionProps) {
  const hasHeader = Boolean(eyebrow || title || description);
  const tone = bgClass === "bg-gray-50" ? "muted" : "white";

  return (
    <SectionSurface
      aria-label={title ?? "Bli kjent med North Group"}
      tone={tone}
      atmosphere={tone === "muted" ? "muted" : "none"}
      pattern="quiet"
      intensity="quiet"
      className="py-24 lg:py-32"
    >
      <Container>
        {hasHeader && (
          <FadeIn className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className="font-display font-extrabold tracking-tight text-navy-dark"
                style={{
                  fontSize: "clamp(1.875rem, 3.5vw + 1rem, 2.75rem)",
                  lineHeight: 1.05,
                }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-6 text-lg leading-relaxed text-navy-dark/70 font-light">
                {description}
              </p>
            )}
          </FadeIn>
        )}

        <FadeIn delay={hasHeader ? 0.1 : 0}>
          <div className="relative aspect-[640/328] overflow-hidden rounded-2xl bg-navy-dark shadow-xl shadow-navy-dark/10">
            <video
              src={videoSrc}
              poster={posterSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </FadeIn>
      </Container>
    </SectionSurface>
  );
}
