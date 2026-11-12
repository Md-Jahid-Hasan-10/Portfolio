import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-gradient text-white shadow-lg shadow-accent/20 hover:shadow-accent/35 hover:brightness-110 active:scale-[0.98]",
  secondary:
    "border border-border/[0.12] bg-surface text-fg hover:border-accent/40 hover:text-accent hover:shadow-accent-glow active:scale-[0.98]",
  ghost: "text-muted hover:text-fg hover:bg-border/[0.06]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  "aria-label"?: string;
  onClick?: () => void;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, target, rel, download, ...linkRest } = props;
    const external = isExternal(href);
    return (
      <Link
        href={href}
        className={classes}
        {...(external
          ? { target: target ?? "_blank", rel: rel ?? "noopener noreferrer" }
          : {})}
        {...(download !== undefined ? { download } : {})}
        {...linkRest}
      >
        {children}
      </Link>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
