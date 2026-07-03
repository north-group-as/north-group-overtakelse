import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export default function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6 lg:px-10",
        size === "default" && "max-w-7xl",
        size === "narrow" && "max-w-5xl",
        size === "wide" && "max-w-[88rem]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
