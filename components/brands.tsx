"use client";

import { motion } from "motion/react";

import * as b from "@/data/brandsData";
import { ActionPair, DemoSticker, IconChip, Reveal, SectionHead } from "@/components/ui";

const hero = b.hero;
const headlineStats = b.headlineStats;
const solutions = b.solutions;
const pricingBands = b.pricingBands;
const outcomes = b.outcomes;
const process = b.process;
const verticals = b.verticals;
const whyBrands = b.whyBrands;
const demoDashboard = b.demoDashboard;

/** Sample rows for the brands hero demo card. Fictional, labelled. */
const demoRows = [
  { label: "Day 01", value: "214 new users" },
  { label: "Day 03", value: "786 verified actions" },
  { label: "Day 07", value: "9,860 verified actions" },
];

export function BrandsHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/4 size-[24rem] rounded-full bg-primary/15 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-52 right-[-6rem] size-[22rem] rounded-full bg-sun/50 blur-[100px] dark:bg-sun/10"
      />
      <div className="wrap relative grid items-center gap-12 pb-14 pt-12 md:pt-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 17 }}
          >
            <p className="eyebrow">{hero.eyebrow}</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 17, delay: 0.06 }}
            className="mt-5 font-display text-[2.4rem] font-extrabold leading-[1.03] tracking-tight text-balance sm:text-6xl lg:text-[4.3rem]"
          >
            Reach young India{" "}
            <span className="squiggle">through campaigns powered by real people</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 17, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {hero.lead}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 17, delay: 0.18 }}
            className="mt-8"
          >
            <ActionPair primary={hero.primaryCta} secondary={hero.secondaryCta} />
          </motion.div>
          <p className="mt-4 text-sm font-medium text-faint">{hero.responseNote}</p>
        </div>

        {/* tilted pilot-snapshot stack */}
        <motion.div
          initial={{ opacity: 0, y: 32, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-2 rotate-[-3deg] rounded-[28px] bg-coral/25"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-2 rotate-[2.5deg] rounded-[28px] bg-primary/15"
          />
          <div className="card-warm relative overflow-hidden p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Pilot snapshot</p>
                <p className="mt-1 font-display text-3xl font-extrabold tabular-nums">
                  9,860
                </p>
                <p className="text-sm text-muted">Verified actions in first 7 days</p>
              </div>
              <span className="sticker animate-float-slow bg-sun px-3 py-1 text-xs uppercase tracking-wider text-on-sun [--float-rot:-3deg]">
                ✳ Illustrative
              </span>
            </div>
            <dl className="mt-5 grid gap-2 sm:grid-cols-3">
              {demoDashboard.metrics.map((m) => (
                <div key={m.label} className="rounded-xl bg-cream/70 px-4 py-4">
                  <dd className="font-display text-xl font-extrabold tabular-nums">
                    {m.value}
                  </dd>
                  <dt className="mt-1 text-xs text-muted">{m.label}</dt>
                </div>
              ))}
            </dl>
            <ul className="mt-4 space-y-2">
              {demoRows.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between rounded-xl border border-line bg-cream/60 px-4 py-2.5 text-sm"
                >
                  <span className="text-muted">{row.label}</span>
                  <span className="font-mono font-bold">{row.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <DemoSticker label={demoDashboard.label} note={demoDashboard.note} />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-y-2 border-ink/10 bg-card">
        <dl className="wrap grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
          {headlineStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <dt className="order-2 mt-1 text-sm text-muted">{stat.label}</dt>
              <dd className="font-display text-3xl font-extrabold tabular-nums sm:text-4xl">
                {stat.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function WhyBrandsSection() {
  return (
    <section className="wrap py-16 md:py-24" aria-labelledby="why-brand-heading">
      <SectionHead
        id="why-brand-heading"
        eyebrow={whyBrands.eyebrow}
        title={whyBrands.title}
        lead={whyBrands.lead}
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyBrands.cards.map((card, i) => (
          <Reveal key={card.title} delay={(i % 4) * 0.07}>
            <article className="card-warm h-full border-t-4 !border-t-primary p-6 transition-transform duration-200 hover:-translate-y-1">
              <IconChip name={card.icon} />
              <h3 className="mt-4 font-display text-lg font-extrabold">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const solutionSpans = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
];

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="scroll-mt-28 border-y-2 border-ink/10 bg-cream/50 py-16 md:py-24 dark:bg-card/40"
      aria-labelledby="sol-heading"
    >
      <div className="wrap">
        <SectionHead
          id="sol-heading"
          eyebrow={solutions.eyebrow}
          title={solutions.title}
          lead={solutions.lead}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {solutions.items.map((item, i) => (
            <Reveal key={item.n} delay={(i % 4) * 0.05} className={solutionSpans[i % 12]}>
              <article className="card-warm h-full p-6 transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-start gap-3.5">
                  <IconChip name={item.icon} />
                  <div>
                    <p className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-xs font-extrabold tracking-[0.16em] text-coral">
                        {item.n}
                      </span>
                      <span className="rounded-full border border-line bg-cream px-2 py-0.5 text-[11px] font-semibold text-muted">
                        {item.tag}
                      </span>
                    </p>
                    <h3 className="mt-1 font-display text-lg font-extrabold sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                <p className="mt-3 text-sm text-faint">Best for: {item.bestFor}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VerticalsSection() {
  return (
    <section className="wrap py-16 md:py-24" aria-labelledby="vert-heading">
      <SectionHead
        id="vert-heading"
        eyebrow={verticals.eyebrow}
        title={verticals.title}
        lead={verticals.lead}
      />
      <ul className="mt-8 flex flex-wrap gap-2.5">
        {verticals.items.map((v, i) => (
          <li key={v}>
            <Reveal delay={(i % 6) * 0.04}>
              <span className="block rounded-full border-2 border-ink/10 bg-card px-5 py-2 text-sm font-bold text-ink transition-colors hover:border-coral hover:bg-sun/40">
                {v}
              </span>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CostsSection() {
  return (
    <section
      id="costs"
      className="scroll-mt-28 border-y-2 border-ink/10 bg-cream/50 py-16 md:py-24 dark:bg-card/40"
      aria-labelledby="cost-heading"
    >
      <div className="wrap">
        <SectionHead
          id="cost-heading"
          eyebrow={pricingBands.eyebrow}
          title={pricingBands.title}
          lead={pricingBands.lead}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pricingBands.bands.map((band, i) => (
            <Reveal key={band.type} delay={i * 0.06}>
              <div className="card-warm h-full p-6 text-center">
                <p className="text-sm font-semibold text-muted">{band.type}</p>
                <p className="mt-2 font-display text-2xl font-extrabold tabular-nums">
                  {band.range}
                </p>
                <p className="mt-1 text-xs text-faint">{band.unit}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-faint">{pricingBands.footnote}</p>
      </div>
    </section>
  );
}

export function OutcomesSection() {
  return (
    <section
      id="outcomes"
      className="wrap scroll-mt-28 py-16 md:py-24"
      aria-labelledby="out-heading"
    >
      <SectionHead
        id="out-heading"
        eyebrow={outcomes.eyebrow}
        title={outcomes.title}
        lead={outcomes.lead}
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {outcomes.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <div className="rounded-panel bg-ink p-7 text-paper dark:bg-card dark:text-ink dark:border dark:border-line">
              <p className="font-display text-3xl font-extrabold tabular-nums text-sun sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-semibold">{s.label}</p>
              <p className="mt-1 text-xs opacity-70">vs {s.compare}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-sm text-faint">{outcomes.sourceNote}</p>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="scroll-mt-28 border-y-2 border-ink/10 bg-cream/50 py-16 md:py-24 dark:bg-card/40"
      aria-labelledby="proc-heading"
    >
      <div className="wrap">
        <SectionHead
          id="proc-heading"
          eyebrow={process.eyebrow}
          title={process.title}
          lead={process.lead}
        />
        <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-ink/20 md:block"
          />
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 0.09}>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="relative z-10 grid size-12 place-items-center rounded-full bg-coral font-display text-sm font-extrabold text-on-coral"
                >
                  {step.n}
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
