import { GraduationCap, MapPin, CalendarDays, Award } from "lucide-react";
import { education } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-content">
        <SectionHeading index="06" title="Education" />

        <Reveal className="mt-10">
          <div className="card card-interactive relative overflow-hidden p-7 sm:p-9">
            {/* Accent edge */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1 bg-accent-gradient"
            />

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={22} />
                </span>

                <div>
                  <h3 className="text-xl font-bold tracking-tight text-fg">
                    {education.institution}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {education.degree}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-faint">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} />
                      {education.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={13} />
                      {education.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-3 rounded-xl border border-accent/25 bg-accent/[0.07] px-4 py-3">
                <Award size={18} className="text-accent" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-faint">
                    Academic
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-fg">{education.cgpa}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
