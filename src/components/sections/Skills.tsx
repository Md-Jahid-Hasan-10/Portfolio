import { skillGroups } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-content">
        <SectionHeading
          index="04"
          title="Skills"
          subtitle="The tools and patterns I reach for when building backend systems."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={0.06 * i}>
              <div className="card card-interactive flex h-full flex-col p-6">
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">
                  {group.title}
                </h3>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-flex items-center rounded-lg border border-border/[0.1] bg-elevated/60 px-2.5 py-1.5 text-[13px] text-muted transition-all duration-200 hover:border-accent/35 hover:bg-accent/[0.07] hover:text-accent">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          {/* Filler card keeps the 5-card grid balanced on desktop */}
          <Reveal delay={0.06 * skillGroups.length}>
            <div className="card flex h-full flex-col justify-center p-6">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-faint">
                Currently learning
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Deepening my understanding of distributed tracing, Kubernetes and
                infrastructure-as-code — the operational side of running services at scale.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
