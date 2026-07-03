import { cn } from "@/lib/utils";

export type AtmosphereVariant = "light" | "muted" | "dark" | "warm" | "none";
export type AtmospherePattern = "orbs" | "orbs-grid" | "orbs-lines" | "quiet";
export type AtmosphereIntensity = "quiet" | "normal" | "rich";

interface Props {
  variant?: AtmosphereVariant;
  pattern?: AtmospherePattern;
  intensity?: AtmosphereIntensity;
  className?: string;
}

// CSS-only nordlys/orb-drift bakgrunn. Foreldreseksjonen må ha
// `relative isolate overflow-hidden`.
const ORBS: Record<Exclude<AtmosphereVariant, "none">, Array<{ pos: string; tone: string; size: string; delay?: string }>> = {
  light: [
    {
      pos: "-top-32 -left-24",
      tone: "bg-teal-accent/[0.18]",
      size: "h-[40rem] w-[40rem]",
    },
    {
      pos: "-bottom-40 -right-32",
      tone: "bg-green/[0.14]",
      size: "h-[38rem] w-[38rem]",
      delay: "[animation-delay:-10s]",
    },
    {
      pos: "top-1/3 left-1/2",
      tone: "bg-navy-light/[0.06]",
      size: "h-[28rem] w-[28rem]",
      delay: "[animation-delay:-18s]",
    },
  ],
  muted: [
    {
      pos: "-top-24 right-1/4",
      tone: "bg-teal/[0.13]",
      size: "h-[38rem] w-[38rem]",
    },
    {
      pos: "-bottom-32 -left-32",
      tone: "bg-navy-light/[0.11]",
      size: "h-[40rem] w-[40rem]",
      delay: "[animation-delay:-14s]",
    },
    {
      pos: "top-1/4 right-[-8rem]",
      tone: "bg-green/[0.10]",
      size: "h-[26rem] w-[26rem]",
      delay: "[animation-delay:-22s]",
    },
  ],
  warm: [
    {
      pos: "-top-28 right-8",
      tone: "bg-green-light/75",
      size: "h-[38rem] w-[38rem]",
    },
    {
      pos: "-bottom-36 -left-28",
      tone: "bg-green/[0.13]",
      size: "h-[40rem] w-[40rem]",
      delay: "[animation-delay:-12s]",
    },
    {
      pos: "top-1/2 right-1/3",
      tone: "bg-teal-accent/[0.09]",
      size: "h-[24rem] w-[24rem]",
      delay: "[animation-delay:-20s]",
    },
  ],
  dark: [
    {
      pos: "-top-40 -left-20",
      tone: "bg-teal-accent/25",
      size: "h-[40rem] w-[40rem]",
    },
    {
      pos: "-bottom-40 right-1/4",
      tone: "bg-green/15",
      size: "h-[34rem] w-[34rem]",
      delay: "[animation-delay:-12s]",
    },
  ],
};

const INTENSITY_CLASS: Record<AtmosphereIntensity, string> = {
  quiet: "opacity-75",
  normal: "opacity-100",
  rich: "opacity-100",
};

const PATTERN_CLASS: Record<Exclude<AtmospherePattern, "orbs">, Record<Exclude<AtmosphereVariant, "none">, string>> = {
  quiet: {
    light: "bg-[radial-gradient(circle_at_1px_1px,rgb(14_44_61/0.06)_1px,transparent_0)] bg-[size:24px_24px] opacity-35",
    muted: "bg-[radial-gradient(circle_at_1px_1px,rgb(14_44_61/0.055)_1px,transparent_0)] bg-[size:26px_26px] opacity-40",
    warm: "bg-[radial-gradient(circle_at_1px_1px,rgb(0_168_107/0.055)_1px,transparent_0)] bg-[size:26px_26px] opacity-35",
    dark: "bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.08)_1px,transparent_0)] bg-[size:26px_26px] opacity-30",
  },
  "orbs-grid": {
    light: "bg-[linear-gradient(to_right,rgb(14_44_61/0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgb(14_44_61/0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-65",
    muted: "bg-[linear-gradient(to_right,rgb(14_44_61/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(14_44_61/0.055)_1px,transparent_1px)] bg-[size:74px_74px] opacity-65",
    warm: "bg-[linear-gradient(to_right,rgb(0_168_107/0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgb(14_44_61/0.045)_1px,transparent_1px)] bg-[size:74px_74px] opacity-60",
    dark: "bg-[linear-gradient(to_right,rgb(255_255_255/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.045)_1px,transparent_1px)] bg-[size:80px_80px] opacity-35",
  },
  "orbs-lines": {
    light: "bg-[repeating-linear-gradient(135deg,rgb(14_44_61/0.05)_0_1px,transparent_1px_32px)] opacity-45",
    muted: "bg-[repeating-linear-gradient(135deg,rgb(14_44_61/0.05)_0_1px,transparent_1px_34px)] opacity-40",
    warm: "bg-[repeating-linear-gradient(135deg,rgb(0_168_107/0.045)_0_1px,transparent_1px_34px)] opacity-40",
    dark: "bg-[repeating-linear-gradient(135deg,rgb(255_255_255/0.07)_0_1px,transparent_1px_34px)] opacity-35",
  },
};

export default function SectionAtmosphere({
  variant = "light",
  pattern = "orbs",
  intensity = "normal",
  className,
}: Props) {
  if (variant === "none") return null;

  const orbs = pattern === "quiet" ? ORBS[variant].slice(0, 1) : ORBS[variant];
  const patternClass = pattern === "orbs" ? null : PATTERN_CLASS[pattern][variant];

  return (
    <div
      aria-hidden
      role="presentation"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        INTENSITY_CLASS[intensity],
        className,
      )}
    >
      {patternClass ? (
        <div
          aria-hidden
          role="presentation"
          className={cn("absolute inset-0", patternClass)}
        />
      ) : null}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={cn(
            "absolute rounded-full blur-3xl",
            orb.pos,
            orb.tone,
            orb.size,
            "motion-safe:animate-orb-drift",
            orb.delay,
          )}
        />
      ))}
    </div>
  );
}
