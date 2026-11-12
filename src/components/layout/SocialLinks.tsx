import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiCodechef, SiCodeforces } from "react-icons/si";
import { Mail } from "lucide-react";
import { mailtoHref, socials } from "@/data/content";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ReactNode> = {
  github: <FaGithub size={16} />,
  linkedin: <FaLinkedin size={16} />,
  codeforces: <SiCodeforces size={16} />,
  codechef: <SiCodechef size={16} />,
};

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md";
};

export function SocialLinks({ className, size = "md" }: SocialLinksProps) {
  const box = size === "sm" ? "h-9 w-9" : "h-10 w-10";

  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {socials.map((s) => (
        <li key={s.id}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label} — ${s.handle}`}
            title={`${s.label} — ${s.handle}`}
            className={cn(
              "flex items-center justify-center rounded-xl border border-border/[0.1] bg-surface text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-accent-glow",
              box,
            )}
          >
            {icons[s.id]}
          </a>
        </li>
      ))}
      <li>
        <a
          href={mailtoHref}
          aria-label="Email me"
          title="2227jahid@gmail.com"
          className={cn(
            "flex items-center justify-center rounded-xl border border-border/[0.1] bg-surface text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-accent-glow",
            box,
          )}
        >
          <Mail size={16} />
        </a>
      </li>
    </ul>
  );
}
