import Image from "next/image";
import { cn } from "@/lib/utils";

type Variant = "mark" | "full" | "stacked";
type Tone = "onLight" | "onDark";
type Brand = "group" | "hr" | "rekruttering";

interface LogoNorthGroupProps {
  variant?: Variant;
  tone?: Tone;
  brand?: Brand;
  className?: string;
  markClassName?: string;
  ariaLabel?: string;
  /** px width. Defaults are sane for nav (160) / footer (180). */
  width?: number;
}

const SERVICE_LOGOS = {
  onLight: "/images/logo-north-group-no-submark-light.webp",
  onDark: "/images/logo-north-group-no-submark-dark.webp",
} as const;

const SERVICE_LOGO_RATIO = 629 / 202;
const MARK_PATH = "M8 70 L30 29 Q32 24 35 30 L49 58 L70 22 Q73 16 77 24 L93 69 M14 83 L39 43 M46 92 L70 50";
const SERVICE_SUBMARK_COLORS = {
  hr: {
    onLight: "var(--color-teal)",
    onDark: "var(--color-teal-accent)",
  },
  rekruttering: {
    onLight: "var(--color-green-dark)",
    onDark: "var(--color-green)",
  },
} as const;

export default function LogoNorthGroup({
  variant = "full",
  tone = "onLight",
  brand = "group",
  className,
  markClassName,
  ariaLabel = "North Group",
  width,
}: LogoNorthGroupProps) {
  const defaultWidth = variant === "stacked" ? 120 : 160;
  const actualWidth = width ?? defaultWidth;

  if (brand === "group" && variant !== "mark") {
    const image =
      tone === "onDark"
        ? {
            src: "/images/logo-north-group-white.webp",
            width: 600,
            height: 183,
          }
        : {
            src: "/images/logo-north-group.png",
            width: 629,
            height: 202,
          };

    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image
          src={image.src}
          alt={ariaLabel}
          width={image.width}
          height={image.height}
          sizes={`${actualWidth}px`}
          className={cn("block h-auto select-none", markClassName)}
          style={{ width: actualWidth, height: "auto" }}
          priority={actualWidth <= 180}
        />
      </span>
    );
  }

  if (brand !== "group" && variant !== "mark") {
    const actualHeight = Math.round(actualWidth / SERVICE_LOGO_RATIO);
    const submarkFill = SERVICE_SUBMARK_COLORS[brand][tone];
    const submarkText = brand === "hr" ? "HR" : "REKRUTTERING";
    const submarkSize = brand === "hr" ? actualWidth * 0.09 : actualWidth * 0.046;
    const submarkSpacing = brand === "hr" ? "0.16em" : "0.1em";

    return (
      <span
        className={cn("relative inline-flex items-center", className)}
        style={{ width: actualWidth, height: actualHeight }}
      >
        <Image
          src={SERVICE_LOGOS[tone]}
          alt={ariaLabel}
          width={actualWidth}
          height={actualHeight}
          sizes={`${actualWidth}px`}
          className={cn("block h-auto select-none", markClassName)}
          priority={actualWidth <= 190}
        />
        <span
          aria-hidden
          className="absolute left-[35.3%] top-[61.5%] font-sans font-extrabold leading-none"
          style={{
            color: submarkFill,
            fontSize: submarkSize,
            letterSpacing: submarkSpacing,
          }}
        >
          {submarkText}
        </span>
      </span>
    );
  }

  if (variant === "mark") {
    return (
      <span className={className} role="img" aria-label={ariaLabel}>
        <svg
          viewBox="0 0 100 100"
          className={cn("block shrink-0", markClassName)}
          aria-hidden
        >
          <defs>
            <clipPath id={`ng-clip-${tone}`}>
              <circle cx="50" cy="50" r="48" />
            </clipPath>
          </defs>
          <circle cx="50" cy="50" r="48" fill="var(--color-teal)" />
          <path
            d={MARK_PATH}
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>
    );
  }
}
