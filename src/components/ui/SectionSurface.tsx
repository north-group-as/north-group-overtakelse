import type { HTMLAttributes, ReactNode } from "react";
import SectionAtmosphere, {
  type AtmosphereIntensity,
  type AtmospherePattern,
  type AtmosphereVariant,
} from "@/components/ui/SectionAtmosphere";
import { cn } from "@/lib/utils";

type SurfaceElement = "section" | "div" | "article" | "aside";
type Tone = "white" | "muted" | "dark";

interface SectionSurfaceProps extends HTMLAttributes<HTMLElement> {
  as?: SurfaceElement;
  tone?: Tone;
  atmosphere?: AtmosphereVariant;
  pattern?: AtmospherePattern;
  intensity?: AtmosphereIntensity;
  children: ReactNode;
}

const TONE_CLASS: Record<Tone, string> = {
  white:
    "bg-[linear-gradient(135deg,#ffffff_0%,#f4fbf9_42%,#edf7f5_100%)] text-navy-dark",
  muted:
    "bg-[linear-gradient(135deg,#f7f9fa_0%,#eef8f5_48%,#ffffff_100%)] text-navy-dark",
  dark:
    "bg-[radial-gradient(circle_at_18%_12%,rgb(0_208_132/0.16),transparent_34%),linear-gradient(135deg,#071c28_0%,#0e2c3d_46%,#123c52_100%)] text-white",
};

export default function SectionSurface({
  as: Component = "section",
  tone = "white",
  atmosphere = "none",
  pattern = "orbs",
  intensity = "normal",
  className,
  children,
  ...props
}: SectionSurfaceProps) {
  return (
    <Component
      {...props}
      className={cn("relative isolate overflow-hidden", TONE_CLASS[tone], className)}
    >
      <div
        aria-hidden
        role="presentation"
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-green/35 to-transparent"
      />
      <div
        aria-hidden
        role="presentation"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-px bg-gradient-to-r from-transparent via-navy-dark/15 to-transparent"
      />
      <SectionAtmosphere variant={atmosphere} pattern={pattern} intensity={intensity} />
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
