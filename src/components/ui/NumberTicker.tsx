"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  startValue?: number;
  delay?: number;
  className?: string;
  locale?: string;
  useGrouping?: boolean;
}

export default function NumberTicker({
  value,
  startValue,
  delay = 0,
  className,
  locale = "nb-NO",
  useGrouping = true,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Ikke vis midlertidige tall som kan oppfattes som ekte statistikk før animasjonen starter.
  const isYear = value >= 1900 && value <= 2100;
  const shouldAnimate = startValue !== undefined && startValue !== value && !isYear;
  const resolvedStart = shouldAnimate ? startValue : value;
  const motionValue = useMotionValue(resolvedStart);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (isInView && shouldAnimate) {
      timer = setTimeout(() => motionValue.set(value), delay * 1000);
    }
    return () => {
      if (timer !== null) clearTimeout(timer);
    };
  }, [motionValue, isInView, shouldAnimate, delay, value]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = new Intl.NumberFormat(locale, {
            maximumFractionDigits: 0,
            useGrouping,
          }).format(Math.round(latest));
        }
      }),
    [springValue, locale, useGrouping],
  );

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {new Intl.NumberFormat(locale, { maximumFractionDigits: 0, useGrouping }).format(resolvedStart)}
    </span>
  );
}
