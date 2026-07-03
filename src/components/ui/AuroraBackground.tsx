"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "full" | "subtle" | "whisper";
  overlay?: boolean;
}

export default function AuroraBackground({
  className,
  children,
  intensity = "full",
  overlay = false,
}: AuroraBackgroundProps) {
  // Initialiseres synkront fra matchMedia slik at SSR/hydrering ikke flasher
  // animasjonen før effekt-en kjører på reduced-motion-enheter.
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const isSubtle = intensity === "subtle";
  const isWhisper = intensity === "whisper";

  const auroraLayer = (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true" role="presentation">
      <div
        className={cn(
          "[--dark-gradient:repeating-linear-gradient(100deg,var(--color-navy-dark)_0%,var(--color-navy-dark)_7%,transparent_10%,transparent_12%,var(--color-navy-dark)_16%)]",
          /* Subtil aurora: lilla->teal->grønn binding */
          "[--aurora:repeating-linear-gradient(100deg,var(--color-aurora-plum)_10%,var(--color-teal)_18%,var(--color-forest-green)_26%,var(--color-aurora-sky)_34%,var(--color-teal)_42%)]",
          "[background-image:var(--dark-gradient),var(--aurora)]",
          "[background-size:300%,_200%]",
          "[background-position:50%_50%,50%_50%]",
          "filter",
          isWhisper ? "blur-[14px]" : isSubtle ? "blur-[10px]" : "blur-[8px]",
          !prefersReducedMotion && "after:animate-aurora",
          'after:content-[""]',
          "after:absolute after:inset-0",
          "after:[background-image:var(--dark-gradient),var(--aurora)]",
          "after:[background-size:200%,_100%]",
          "after:[background-attachment:fixed]",
          "after:mix-blend-difference",
          "pointer-events-none",
          "absolute -inset-[10px]",
          isWhisper ? "opacity-20" : isSubtle ? "opacity-40" : "opacity-60",
          "will-change-transform",
          isWhisper
            ? "[mask-image:radial-gradient(ellipse_at_100%_0%,black_5%,transparent_50%)]"
            : "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
        )}
      />
    </div>
  );

  if (overlay) {
    return (
      <div className={cn("absolute inset-0 pointer-events-none", className)}>
        {auroraLayer}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={cn("relative overflow-hidden bg-navy-dark", className)}
    >
      {auroraLayer}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
