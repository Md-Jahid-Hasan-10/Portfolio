import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { footer, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border/[0.08] py-10">
      <div className="container-content">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="text-sm font-semibold text-fg">{site.name}</span>
            <span className="font-mono text-xs text-faint">
              © {footer.year} {site.name}
            </span>
          </div>

          <span className="text-center text-xs text-faint sm:text-right">
            {footer.builtWith}
          </span>

          <Link
            href="#top"
            className="group inline-flex items-center gap-2 rounded-lg border border-border/[0.1] bg-surface px-3.5 py-2 text-xs text-muted transition-all duration-200 hover:border-accent/40 hover:text-accent"
          >
            Back to top
            <ArrowUp
              size={13}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
