"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

import { ActionPair, Reveal, SectionHead } from "@/components/ui";

/** Sticker-style FAQ accordion. Content identical to v1; new presentation. */
export function Faq({
  id,
  eyebrow,
  title,
  lead,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  items: ReadonlyArray<{ question: string; answer: string }>;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id={id} className="wrap scroll-mt-28 py-16 md:py-24" aria-labelledby={`${id}-heading`}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHead id={`${id}-heading`} eyebrow={eyebrow} title={title} lead={lead} />
          <span
            aria-hidden="true"
            className="sticker mt-6 bg-sun px-4 py-1.5 text-xs uppercase tracking-wider text-on-sun"
          >
            ✳ Straight answers
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question} delay={Math.min(i, 4) * 0.04}>
                <div
                  className={`card-warm overflow-hidden transition-colors ${isOpen ? "!border-primary/50" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-extrabold sm:text-lg">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className={`grid size-8 shrink-0 place-items-center rounded-full ${isOpen ? "bg-primary text-primary-ink" : "bg-cream text-ink"}`}
                    >
                      <Plus className="size-4" aria-hidden="true" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Big sunny call-to-action panel. */
export function Cta({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="wrap pb-4 pt-4" aria-labelledby="cta-heading">
      <Reveal>
        <div className="relative overflow-hidden rounded-panel bg-sun p-8 text-center text-on-sun sm:p-14">
          <span
            aria-hidden="true"
            className="sticker absolute left-6 top-6 rotate-[-8deg] bg-card px-3 py-1 text-xs uppercase tracking-wider text-ink"
          >
            ★ Go
          </span>
          <span
            aria-hidden="true"
            className="sticker absolute bottom-6 right-6 rotate-[6deg] bg-card px-3 py-1 text-xs uppercase tracking-wider text-ink"
          >
            ✳ Now
          </span>
          <h2
            id="cta-heading"
            className="mx-auto max-w-2xl font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-on-sun/80">
            {body}
          </p>
          <div className="mt-8 flex justify-center">
            <div className="[&_a:first-child]:!bg-ink [&_a:first-child]:!text-paper dark:[&_a:first-child]:!bg-card dark:[&_a:first-child]:!text-ink">
              <ActionPair primary={primary} secondary={secondary} center />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
