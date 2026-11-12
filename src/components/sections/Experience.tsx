import { experience } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-content">
        <SectionHeading
          index="02"
          title="Experience"
          subtitle="Roles across industry and competitive programming communities."
        />

        <div className="relative mt-12">
          {/* Vertical accent line */}
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/60 via-accent/25 to-transparent sm:left-[9px]"
          />

          <ol className="space-y-8">
            {experience.map((entry, i) => (
              <li key={`${entry.title}-${entry.organization}`}>
                <Reveal delay={0.06 * i}>
                  <div className="relative pl-9 sm:pl-12">
                    {/* Timeline dot */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-accent bg-bg sm:h-[19px] sm:w-[19px]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>

                    <div className="card card-interactive p-5 sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                        <div className="min-w-0">
                          <h3 className="text-base font-semibold leading-snug text-fg sm:text-lg">
                            {entry.title}
                          </h3>
                          <p className="mt-1 text-sm text-accent">{entry.organization}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          {entry.current ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                              Current
                            </span>
                          ) : null}
                          <span className="font-mono text-xs whitespace-nowrap text-faint">
                            {entry.period}
                          </span>
                        </div>
                      </div>

                      {entry.description ? (
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {entry.description}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
