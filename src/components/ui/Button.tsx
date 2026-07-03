import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline-white" | "outline-dark" | "ghost-white";
type Size = "md" | "lg";

const VARIANT: Record<Variant, string> = {
  primary:
    "bg-green text-navy-dark shadow-lg shadow-green/25 hover:bg-green-dark hover:shadow-green/40",
  "outline-white":
    "border border-white/40 text-white hover:bg-white hover:text-navy-dark",
  "outline-dark":
    "border border-navy-dark/20 text-navy-dark hover:border-green hover:text-green",
  "ghost-white": "text-white/80 hover:text-white",
};

const SIZE: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-white";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & (
  | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">)
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
);

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(BASE, VARIANT[variant], SIZE[size], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(props as Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
