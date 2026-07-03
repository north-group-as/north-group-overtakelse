import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  titleLine1: string;
  titleLine2?: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  id?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  titleLine1,
  titleLine2,
  subtitle,
  align = "left",
  tone = "dark",
  id,
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        align === "center" ? "text-center mx-auto" : "",
        "max-w-3xl",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "font-sans text-[13px] font-semibold uppercase tracking-[0.24em] mb-5",
            isLight ? "text-green" : "text-green-dark",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-display font-extrabold tracking-tight leading-[1.05]",
          "text-[clamp(1.875rem,3.5vw+1rem,2.75rem)]",
          isLight ? "text-white" : "text-navy-dark",
        )}
      >
        {titleLine1}
        {titleLine2 ? (
          <>
            <br className="hidden md:inline" />
            <span className={cn("block", isLight ? "text-white/70" : "text-navy-dark/60")}>
              {titleLine2}
            </span>
          </>
        ) : null}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed font-light max-w-2xl",
            align === "center" ? "mx-auto" : "",
            isLight ? "text-white/70" : "text-navy-dark/60",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
