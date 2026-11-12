type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

/**
 * Lightweight class name joiner.
 * Avoids pulling in a `clsx` + `tailwind-merge` dependency chain for a single helper.
 */
export function cn(...classes: ClassValue[]): string {
  const out: string[] = [];
  for (const c of classes) {
    if (!c) continue;
    if (typeof c === "string" || typeof c === "number") out.push(String(c));
    else if (Array.isArray(c)) out.push(cn(...c));
    else if (typeof c === "object") {
      for (const [k, v] of Object.entries(c)) if (v) out.push(k);
    }
  }
  return out.join(" ");
}

/** True when a link is a real, renderable URL (not a TODO placeholder). */
export function isRealLink(href: string | undefined | null): boolean {
  if (!href) return false;
  return !href.startsWith("TODO_");
}

export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}
