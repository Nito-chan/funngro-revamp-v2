"use client";

import { motion } from "motion/react";

import {
  categories,
  demoActivity,
  demoCard,
  earningsLadder,
  headlineStats,
  hero,
  howItWorks,
  mechanics,
  referral,
  trust,
  whyFunngro,
  workTypes,
} from "@/data/youthData";
import { ActionPair, DemoSticker, IconChip, Reveal, SectionHead } from "@/components/ui";
import { DataIcon } from "@/components/icons";

/* ------------------------------- hero ------------------------------- */

export function YouthHero() {
  const ticker = [...demoActivity, ...demoActivity];
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-8rem] size-[26rem] rounded-full bg-sun/40 blur-[100px] dark:bg-sun/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 left-[-10rem] size-[24rem] rounded-full bg-coral/20 blur-[110px]"
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
            className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[4.4rem]"
          >
            Your skills deserve <span className="squiggle">more than likes.</span>
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
          <p className="mt-4 text-sm font-medium text-faint">{hero.footnote}</p>
        </div>

        {/* layered, tilted sticker-stack demo card */}
        <motion.div
          initial={{ opacity: 0, y: 32, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-2 rotate-[3deg] rounded-[28px] bg-primary/15"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-2 rotate-[-2deg] rounded-[28px] bg-sun/50 dark:bg-sun/20"
          />
          <div className="card-warm relative overflow-hidden p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">This week</p>
                <p className="mt-1 font-display text-3xl font-extrabold tabular-nums">
                  {demoCard.earnedThisWeek.value}
                </p>
                <p className="text-sm text-muted">{demoCard.earnedThisWeek.label}</p>
              </div>
              <span className="sticker animate-float-slow bg-leaf-fill px-3 py-1 text-xs uppercase tracking-wider text-white [--float-rot:3deg]">
                ● Live
              </span>
            </div>
            <ul className="mt-5 space-y-2">
              {ticker.map((row, i) => (
                <li
                  key={`${row.task}-${i}`}
                  aria-hidden={i >= demoActivity.length ? "true" : undefined}
                  className="flex items-center justify-between rounded-xl border border-line bg-cream/60 px-4 py-2.5 text-sm"
                >
                  <span className="text-muted">{row.task}</span>
                  <span className="font-mono font-bold">{row.amount}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-5 grid grid-cols-3 gap-2">
              {demoCard.rows.map((row) => (
                <div key={row.label} className="rounded-xl bg-cream/70 px-3 py-3">
                  <dt className="text-[11px] leading-tight text-muted">{row.label}</dt>
                  <dd className="mt-1 font-display text-sm font-extrabold">{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5">
              <DemoSticker label={demoCard.label} note={demoCard.note} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* stats as a large-number strip */}
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

/* -------------------------------- why ------------------------------- */

const bentoSpans = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-6",
];

export function WhySection() {
  return (
    <section className="wrap scroll-mt-28 py-16 md:py-24" aria-labelledby="why-heading">
      <SectionHead
        id="why-heading"
        eyebrow={whyFunngro.eyebrow}
        title={whyFunngro.title}
        lead={whyFunngro.intro}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-6">
        {whyFunngro.cards.map((card, i) => (
          <Reveal
            key={card.title}
            delay={(i % 4) * 0.07}
            className={bentoSpans[i % bentoSpans.length]}
          >
            <article className="card-warm group h-full p-6 transition-transform duration-200 hover:-translate-y-1 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <IconChip name={card.icon} />
                <span
                  aria-hidden="true"
                  className="sticker bg-cream px-2.5 py-1 text-[11px] uppercase tracking-wider text-faint group-hover:bg-sun group-hover:text-on-sun"
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-extrabold">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                {card.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- how it works ----------------------------- */

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-28 border-y-2 border-ink/10 bg-cream/50 py-16 md:py-24 dark:bg-card/40"
      aria-labelledby="hiw-heading"
    >
      <div className="wrap">
        <SectionHead
          id="hiw-heading"
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          lead={howItWorks.lead}
        />
        {/* stepped path: horizontal snap-scroll on desktop, vertical stepper on mobile */}
        <ol className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {howItWorks.steps.map((step, i) => (
            <Reveal
              key={step.n}
              as="li"
              delay={i * 0.08}
              className="min-w-[82%] snap-center sm:min-w-[60%] md:min-w-0"
            >
              <div className="relative h-full rounded-panel border-2 border-ink/10 bg-card p-6 sm:p-8">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl font-extrabold text-primary/15"
                >
                  {step.n}
                </span>
                <h3 className="mt-2 font-display text-xl font-extrabold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                {i < howItWorks.steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 top-1/2 hidden size-8 -translate-y-1/2 place-items-center rounded-full bg-coral font-bold text-on-coral md:grid"
                  >
                    →
                  </span>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ol>
        <p className="mt-8 text-sm">
          <a
            href={howItWorks.deepLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary-deep underline decoration-coral decoration-2 underline-offset-4 dark:text-primary"
          >
            {howItWorks.deepLink.label} →
          </a>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------ work types ------------------------------ */

const workSpans = ["md:col-span-4", "md:col-span-2", "md:col-span-2", "md:col-span-4"];

export function WorkTypesSection() {
  return (
    <section
      id="work-types"
      className="wrap scroll-mt-28 py-16 md:py-24"
      aria-labelledby="work-heading"
    >
      <SectionHead
        id="work-heading"
        eyebrow={workTypes.eyebrow}
        title={workTypes.title}
        lead={workTypes.lead}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-6">
        {workTypes.items.map((item, i) => (
          <Reveal key={item.n} delay={(i % 4) * 0.07} className={workSpans[i % 4]}>
            <article className="card-warm h-full p-6 transition-transform duration-200 hover:-translate-y-1 sm:p-8">
              <div className="flex items-center gap-4">
                <IconChip name={item.icon} />
                <div>
                  <p className="font-display text-xs font-extrabold tracking-[0.18em] text-coral">
                    {item.n}
                  </p>
                  <h3 className="font-display text-xl font-extrabold sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {item.body}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.examples.map((ex) => (
                  <li
                    key={ex}
                    className="rounded-full border border-line bg-cream/70 px-3.5 py-1.5 text-xs font-medium text-muted sm:text-sm"
                  >
                    {ex}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ categories ------------------------------ */

export function CategoriesSection() {
  return (
    <section
      id="categories"
      className="wrap scroll-mt-28 py-16 md:py-24"
      aria-labelledby="cat-heading"
    >
      <SectionHead
        id="cat-heading"
        eyebrow={categories.eyebrow}
        title={categories.title}
        lead={categories.lead}
      />
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {categories.items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 4) * 0.05}>
            <div className="card-warm flex h-full items-center gap-3 p-4 transition-transform duration-200 hover:-translate-y-1 hover:border-primary/40 sm:p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sun/60 text-on-sun dark:bg-sun/25 dark:text-sun">
                <DataIcon name={item.icon} className="size-5" />
              </span>
              <span className="text-sm font-bold leading-snug sm:text-[0.95rem]">
                {item.title}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
      <p className="mt-6 text-sm text-faint">{categories.sourceNote}</p>
    </section>
  );
}

/* -------------------------------- ladder -------------------------------- */

export function LadderSection() {
  return (
    <section
      id="ladder"
      className="scroll-mt-28 border-y-2 border-ink/10 bg-ink py-16 text-paper md:py-24 dark:bg-cream/10"
      aria-labelledby="ladder-heading"
    >
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow !text-sun">{earningsLadder.eyebrow}</p>
          <h2
            id="ladder-heading"
            className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-[2.75rem]"
          >
            {earningsLadder.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper/70 md:text-lg dark:text-muted">
            {earningsLadder.intro}
          </p>
        </div>

        {/* ascending CSS ladder */}
        <ol className="mt-12 grid gap-5 md:grid-cols-3 md:items-end">
          {earningsLadder.stages.map((stage, i) => (
            <Reveal as="li" key={stage.id} delay={i * 0.1}>
              <article
                className="rounded-panel border border-paper/15 bg-paper/[0.06] p-6 backdrop-blur-sm sm:p-7 dark:border-line"
                style={{ marginBottom: `${i * 0}px` }}
              >
                <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-sun">
                  {stage.name}
                </p>
                <div
                  aria-hidden="true"
                  className="mt-4 h-2.5 overflow-hidden rounded-full bg-paper/15"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${28 + i * 30}%` }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 60, damping: 16, delay: 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-coral to-sun"
                  />
                </div>
                <h3 className="mt-4 font-display text-2xl font-extrabold">{stage.headline}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70 dark:text-muted">
                  {stage.body}
                </p>
                <p className="mt-4 font-display text-lg font-extrabold tabular-nums text-sun">
                  {stage.band}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {stage.tasks.map((task) => (
                    <li
                      key={task}
                      className="rounded-full border border-paper/20 px-3 py-1 text-xs text-paper/80 dark:border-line dark:text-muted"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>

        <dl className="mt-8 grid gap-4 rounded-panel border border-paper/15 bg-sun p-6 text-on-sun sm:grid-cols-2 sm:p-8">
          <div>
            <dt className="text-sm font-bold uppercase tracking-wider">
              {earningsLadder.average.label}
            </dt>
            <dd className="mt-1 font-display text-3xl font-extrabold tabular-nums">
              {earningsLadder.average.value}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-bold uppercase tracking-wider">
              {earningsLadder.top.label}
            </dt>
            <dd className="mt-1 font-display text-3xl font-extrabold tabular-nums">
              {earningsLadder.top.value}
            </dd>
          </div>
        </dl>
        <p className="mt-5 text-sm text-paper/70 dark:text-muted">
          {earningsLadder.progressionNote}
        </p>
        <p className="mt-2 text-xs text-paper/50 dark:text-faint">
          {earningsLadder.disclaimer}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------- mechanics ------------------------------- */

export function MechanicsSection() {
  return (
    <section className="wrap py-16 md:py-24" aria-labelledby="mech-heading">
      <SectionHead
        id="mech-heading"
        eyebrow={mechanics.eyebrow}
        title={mechanics.title}
        lead={mechanics.lead}
      />
      <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mechanics.items.map((item, i) => (
          <Reveal key={item.name} delay={(i % 4) * 0.06}>
            <div className="card-warm h-full border-t-4 !border-t-coral p-6">
              <dt className="font-display text-lg font-extrabold">{item.name}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{item.body}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

/* ------------------------------- referral ------------------------------- */

export function ReferralSection() {
  return (
    <section
      className="wrap py-16 md:py-24"
      aria-labelledby="ref-heading"
    >
      <div className="grid items-center gap-10 overflow-hidden rounded-panel bg-primary p-8 text-primary-ink sm:p-12 lg:grid-cols-2">
        <Reveal>
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-primary-ink/70">
            {referral.eyebrow}
          </p>
          <h2
            id="ref-heading"
            className="mt-3 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-4xl"
          >
            {referral.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-ink/85">
            {referral.lead}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary-ink/70">
            Share &amp; Earn is known as Earnify inside the app. Referral
            earnings are the clearest example of the influence ladder: one
            invite, then a percentage that keeps paying.
          </p>
        </Reveal>
        <dl className="grid grid-cols-2 gap-3">
          {referral.facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.07}>
              <div className="rounded-card bg-primary-ink/12 p-5 backdrop-blur-sm sm:p-6">
                <dt className="text-xs leading-snug text-primary-ink/75 sm:text-sm">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-display text-2xl font-extrabold tabular-nums sm:text-3xl">
                  {fact.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* -------------------------------- trust -------------------------------- */

export function TrustSection() {
  return (
    <section className="wrap py-16 md:py-24" aria-labelledby="trust-heading">
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHead
            id="trust-heading"
            eyebrow={trust.eyebrow}
            title={trust.title}
            lead={trust.lead}
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {trust.points.map((point, i) => (
              <Reveal as="li" key={point.title} delay={(i % 2) * 0.07}>
                <div className="card-warm h-full p-6">
                  <h3 className="font-display text-base font-extrabold">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={0.1}>
          <div className="card-warm relative overflow-hidden p-6 sm:p-8">
            <span
              aria-hidden="true"
              className="sticker absolute right-5 top-5 bg-coral px-3 py-1 text-xs uppercase tracking-wider text-on-coral"
            >
              ★ Proof
            </span>
            <p className="eyebrow">Published growth</p>
            <ul className="mt-6 space-y-5">
              {trust.beforeAfter.map((row) => (
                <li
                  key={row.label}
                  className="border-b border-line pb-5 last:border-0 last:pb-0"
                >
                  <p className="text-sm text-muted">{row.label}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm">
                    <span className="font-mono text-faint line-through">
                      {row.before}
                    </span>
                    <span aria-hidden="true" className="text-faint">
                      →
                    </span>
                    <span className="font-display text-xl font-extrabold">
                      {row.after}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-faint">
              Figures as published by Funngro on its own site. Not independently
              verified by this redesign.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
