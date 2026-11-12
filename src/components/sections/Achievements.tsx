import { Trophy, Star } from "lucide-react";
import { achievements, counters } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-content">
        <SectionHeading
          index="05"
          title="Achievements"
          subtitle="Competitive programming results across ICPC, Codeforces and CodeChef."
        />

        {/* Counters */}
        <Reveal className="mt-12">
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {counters.map((c) => (
              <div
                key={c.label}
                className="card card-interactive relative overflow-hidden p-6 text-center"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-accent-gradient opacity-60"
                />
                <dt className="sr-only">{c.label}</dt>
                <dd>
                  <span className="block bg-accent-gradient bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                    <Counter
                      value={c.value}
                      prefix={c.prefix}
                      suffix={c.suffix}
                    />
                  </span>
                  <span className="mt-2 block text-xs leading-snug text-muted">
                    {c.label}
                  </span>
                  {c.sublabel ? (
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-accent">
                      {c.sublabel}
                    </span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Achievement cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={0.06 * i}>
              <div className="card card-interactive flex h-full items-start gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  {a.title.includes("Codeforces") || a.title.includes("CodeChef") ? (
                    <Star size={18} />
                  ) : (
                    <Trophy size={18} />
                  )}
                </span>

                <div className="min-w-0 flex-1">
                  {a.highlight ? (
                    <span className="inline-block rounded-md bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                      {a.highlight}
                    </span>
                  ) : null}
                  <h3 className="mt-2 text-sm font-semibold leading-snug text-fg">
                    {a.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted">{a.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
