import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { about } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const factIcons = [MapPin, GraduationCap, Briefcase];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-content">
        <SectionHeading
          index="01"
          title="About"
          subtitle="Backend engineer focused on distributed systems, reliability and developer experience."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          {/* Prose */}
          <Reveal className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-[1.75] text-muted first:text-[1.05rem] first:text-fg/90"
              >
                {p}
              </p>
            ))}
          </Reveal>

          {/* Quick facts */}
          <div className="flex flex-col gap-3">
            {about.facts.map((fact, i) => {
              const Icon = factIcons[i] ?? Briefcase;
              return (
                <Reveal key={fact.label} delay={0.08 * i}>
                  <div className="card card-interactive flex items-start gap-4 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-faint">
                        {fact.label}
                      </p>
                      <p className="mt-1.5 text-sm font-semibold leading-snug text-fg">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
