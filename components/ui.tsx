"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { DataIcon } from "@/components/icons";

/** Spring reveal on scroll. Disabled entirely for reduced-motion users. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const Tag = as === "li" ? motion.li : as === "article" ? motion.article : motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y: 26, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ type: "spring", stiffness: 90, damping: 17, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/** Editorial section heading: kicker, display title, lede. */
export function SectionHead({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={id}
        className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-[2.75rem]"
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/** Primary / secondary action pair in the v2 pill-button style. */
export function ActionPair({
  primary,
  secondary,
  center = false,
}: {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  center?: boolean;
}) {
  const external = (href: string) => href.startsWith("http");
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row ${center ? "justify-center" : ""}`}
    >
      <motion.a
        href={primary.href}
        whileHover={{ scale: 1.03, rotate: -0.4 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full bg-primary px-7 py-3 text-center text-sm font-bold text-primary-ink shadow-[0_10px_24px_-12px_rgb(79_70_229/0.7)] sm:text-base"
        {...(external(primary.href)
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {primary.label}
      </motion.a>
      {secondary ? (
        <motion.a
          href={secondary.href}
          whileHover={{ scale: 1.03, rotate: 0.4 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border-2 border-ink/15 bg-card px-7 py-3 text-center text-sm font-bold text-ink hover:border-primary sm:text-base"
          {...(external(secondary.href)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {secondary.label}
        </motion.a>
      ) : null}
    </div>
  );
}

/** Rounded icon chip used at the top of tiles. */
export function IconChip({ name }: { name: string }) {
  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary-deep dark:bg-primary/20 dark:text-primary">
      <DataIcon name={name} />
    </span>
  );
}

/** "Illustrative demo data" sticker — always visible next to sample figures. */
export function DemoSticker({ label, note }: { label: string; note?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="sticker bg-sun px-3 py-1 text-xs uppercase tracking-wider text-on-sun">
        ✳ {label}
      </span>
      {note ? <span className="text-xs text-faint">{note}</span> : null}
    </div>
  );
}
