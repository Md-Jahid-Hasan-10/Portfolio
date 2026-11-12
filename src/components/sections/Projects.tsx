import Image from "next/image";
import { ExternalLink, Github, Layers } from "lucide-react";
import { projects, type Project } from "@/data/content";
import { isRealLink } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { BankingArchitecture } from "@/components/diagrams/BankingArchitecture";

function linkIcon(label: string) {
  return label.toLowerCase().includes("github") ? <Github size={14} /> : <ExternalLink size={14} />;
}

function ProjectImage({ project }: { project: Project }) {
  if (project.diagram) {
    return (
      <div className="overflow-hidden rounded-xl border border-border/[0.08] bg-elevated/40 p-4 sm:p-6">
        <BankingArchitecture />
      </div>
    );
  }

  if (project.image) {
    return (
      <div className="group/img relative overflow-hidden rounded-xl border border-border/[0.08] bg-elevated">
        <Image
          src={project.image}
          alt={project.imageAlt ?? `${project.title} screenshot`}
          width={1200}
          height={750}
          loading="lazy"
          className="h-auto w-full transition-transform duration-500 group-hover/img:scale-[1.02]"
        />
      </div>
    );
  }

  // Tasteful placeholder for projects without a screenshot.
  return (
    <div className="flex aspect-[16/9] items-center justify-center rounded-xl border border-dashed border-border/[0.15] bg-gradient-to-br from-accent/[0.08] via-transparent to-violet/[0.08]">
      <div className="flex flex-col items-center gap-2.5 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
          <Layers size={20} />
        </span>
        <p className="font-mono text-xs text-muted">{project.title}</p>
      </div>
    </div>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.id !== featured?.id);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-content">
        <SectionHeading
          index="03"
          title="Projects"
          subtitle="Systems I have designed and built, from distributed banking backends to applied machine learning."
        />

        <div className="mt-12 space-y-6">
          {/* ---------- Featured project ---------- */}
          {featured ? (
            <Reveal>
              <article className="card card-interactive overflow-hidden">
                {/* Accent top edge */}
                <div
                  aria-hidden="true"
                  className="h-px w-full bg-accent-gradient opacity-70"
                />

                <div className="flex flex-col gap-8 p-6 sm:p-8 lg:gap-10 lg:p-10">
                  {/* Text column */}
                  <div className="flex flex-col min-w-0 lg:max-w-[46rem]">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        Featured
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                      {featured.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                      {featured.summary}
                    </p>

                    {featured.description ? (
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {featured.description}
                      </p>
                    ) : null}

                    {/* Stack chips */}
                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {featured.stack.map((s) => (
                        <li key={s}>
                          <Chip>{s}</Chip>
                        </li>
                      ))}
                    </ul>

                    {/* Highlights */}
                    <ul className="mt-6 space-y-2.5">
                      {featured.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          />
                          <span className="text-sm leading-relaxed text-muted">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Links */}
                    {featured.links.some((l) => isRealLink(l.href)) ? (
                      <div className="mt-7 flex flex-wrap gap-2.5">
                        {featured.links
                          .filter((l) => isRealLink(l.href))
                          .map((l) => (
                            <Button
                              key={l.href}
                              href={l.href}
                              variant={l.label === "GitHub" ? "secondary" : "primary"}
                              size="sm"
                            >
                              {linkIcon(l.label)}
                              {l.label}
                            </Button>
                          ))}
                      </div>
                    ) : null}
                  </div>

                  {/* Diagram / image — full width beneath the text */}
                  <div className="flex items-center">
                    <div className="w-full">
                      <ProjectImage project={featured} />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ) : null}

          {/* ---------- Remaining projects ---------- */}
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.id} delay={0.08 * i}>
                <article className="card card-interactive group flex h-full flex-col overflow-hidden">
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-fg">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {project.stack.map((s) => (
                        <li key={s}>
                          <Chip>{s}</Chip>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 space-y-2">
                      {project.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                          />
                          <span className="text-[13px] leading-relaxed text-muted">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Push links to the bottom so cards align */}
                    <div className="mt-auto pt-6">
                      <div className="flex flex-wrap gap-2.5">
                        {project.links
                          .filter((l) => isRealLink(l.href))
                          .map((l) => (
                            <Button
                              key={l.href}
                              href={l.href}
                              variant={l.label === "GitHub" ? "secondary" : "primary"}
                              size="sm"
                            >
                              {linkIcon(l.label)}
                              {l.label}
                            </Button>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Image area */}
                  <div className="border-t border-border/[0.08] bg-elevated/30 p-3">
                    <ProjectImage project={project} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
