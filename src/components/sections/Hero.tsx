import Image from "next/image";
import { Download, Sparkles } from "lucide-react";
import { hero, site } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Typewriter } from "@/components/ui/Typewriter";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36"
    >
      {/* Background: grid + accent glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/[0.13] blur-[130px]" />
        <div className="absolute right-[-10rem] top-16 h-[28rem] w-[28rem] rounded-full bg-violet/[0.11] blur-[130px]" />
        <div className="absolute left-[-8rem] top-40 h-[22rem] w-[22rem] rounded-full bg-accent/[0.07] blur-[120px]" />
      </div>

      <div className="container-content">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left column */}
          <div className="max-w-2xl">
            {/* Availability badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[11px] tracking-wide text-accent">
                Open to backend roles
              </span>
            </div>

            <p className="label-mono">{hero.greeting}</p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-fg">{hero.name}</span>
            </h1>

            <p className="mt-4 min-h-[2.5rem] font-mono text-lg text-accent sm:text-xl">
              <Typewriter words={hero.rotatingRoles} />
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.pitch}
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={hero.primaryCta.href} size="lg">
                <Sparkles size={16} />
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                download
                variant="secondary"
                size="lg"
              >
                <Download size={16} />
                {hero.secondaryCta.label}
              </Button>
            </div>

            <SocialLinks className="mt-9" />

            {/* Stat strip */}
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border/[0.08] pt-8 sm:grid-cols-4">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-mono text-xl font-bold text-fg">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right column — profile photo */}
          <div className="relative mx-auto w-full max-w-[19rem] lg:max-w-[21rem]">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2.5rem] bg-accent-gradient opacity-70 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/[0.12] bg-surface p-1.5 shadow-2xl shadow-black/20">
              <div className="overflow-hidden rounded-[1.6rem] bg-elevated">
                <Image
                  src={hero.profileImage}
                  alt={`${site.name}, backend engineer`}
                  width={640}
                  height={800}
                  priority
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating role chip */}
            <div className="absolute -bottom-5 left-4 right-4 rounded-xl border border-border/[0.12] bg-surface/95 px-3.5 py-2.5 shadow-xl backdrop-blur sm:-left-6 sm:right-auto sm:min-w-[13rem]">
              <p className="font-mono text-[10px] uppercase tracking-widest text-faint">
                Currently
              </p>
              <p className="mt-0.5 text-xs font-semibold text-fg">
                Trainee Software Engineer
              </p>
              <p className="text-[11px] text-muted">Brain Station 23 PLC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
