import { cn } from "@shared/utils/cn";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: "primary" | "ghost";
  readonly size?: "sm" | "md" | "lg";
  readonly asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base
        "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-hot-pink disabled:pointer-events-none disabled:opacity-50",
        // Size
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-base",
        size === "lg" && "px-8 py-4 text-lg",
        // Variants
        variant === "primary" &&
          "bg-primary text-white hover:bg-primary-hover active:scale-95",
        variant === "ghost" &&
          "border-2 border-white text-white hover:bg-white hover:text-plum active:scale-95",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
