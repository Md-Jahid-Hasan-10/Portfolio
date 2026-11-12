"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { contact, email, mailtoHref, socials } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked — the mailto button remains as the fallback.
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-3xl border border-border/[0.08] bg-surface px-6 py-14 sm:px-12 sm:py-16">
          {/* Accent glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.12] blur-[110px]"
          />

          <div className="relative flex flex-col items-center text-center">
            <SectionHeading
              index="07"
              title={contact.heading}
              align="center"
            />

            <Reveal delay={0.08}>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
                {contact.invite}
              </p>
            </Reveal>

            {/* Email block */}
            <Reveal delay={0.14}>
              <div className="mt-10 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href={mailtoHref}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-accent-gradient px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:brightness-110 hover:shadow-accent/35 active:scale-[0.99] sm:w-auto"
                >
                  <Mail size={17} />
                  {email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
                  className="flex h-[3.25rem] w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-border/[0.12] bg-surface px-5 text-sm font-medium text-muted transition-all duration-200 hover:border-accent/40 hover:text-accent sm:w-auto"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-accent" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </Reveal>

            {/* Social buttons */}
            <Reveal delay={0.2}>
              <ul className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
                {socials.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-border/[0.1] bg-surface px-4 py-2.5 text-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-accent-glow"
                    >
                      <span className="font-medium">{s.label}</span>
                      <span className="font-mono text-[11px] text-faint">
                        {s.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
