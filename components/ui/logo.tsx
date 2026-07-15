import { cn } from "@shared/utils/cn";

interface LogoProps {
  readonly variant?: "light" | "dark";
  readonly className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-plum";
  const subtextColor = variant === "light" ? "text-soft-pink" : "text-magenta";

  return (
    <div className={cn("flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-heading text-lg font-bold tracking-tight",
          textColor,
        )}
      >
        Charis Foundation
      </span>
      <span className={cn("font-body text-xs font-normal tracking-wide", subtextColor)}>
        For Orphans &amp; Widows
      </span>
    </div>
  );
}
