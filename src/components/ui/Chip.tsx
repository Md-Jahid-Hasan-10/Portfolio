import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
  className?: string;
  accent?: boolean;
};

export function Chip({ children, className, accent = false }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border px-2.5 py-1 font-mono text-xs transition-all duration-200",
        accent
          ? "border-accent/30 bg-accent/10 text-accent"
          : "border-border/[0.1] bg-elevated/60 text-muted hover:border-accent/30 hover:text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
