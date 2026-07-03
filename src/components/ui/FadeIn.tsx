"use client";
import { useEffect, useRef, useState, type ElementType } from "react";

interface FadeInProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

export default function FadeIn({
  delay = 0,
  children,
  className = "",
  as: Component = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  // Fail-open: SSR og JS-disablet rendering viser innhold med en gang.
  // Klienten setter shouldFade=true post-mount kun hvis ikke prefers-reduced-motion.
  const [shouldFade, setShouldFade] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );
    const frame = window.requestAnimationFrame(() => {
      setShouldFade(true);
      setIsVisible(false);
      observer.observe(element);
    });
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const style = shouldFade
    ? {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }
    : undefined;

  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}
