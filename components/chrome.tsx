"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { address, contact, liveSite, site, storeLinks } from "@/data/site";

type Variant = "youth" | "brands";

const links: Record<Variant, ReadonlyArray<{ label: string; href: string }>> = {
  youth: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Work types", href: "/#work-types" },
    { label: "Categories", href: "/#categories" },
    { label: "Ladder", href: "/#ladder" },
    { label: "FAQ", href: "/#faq" },
  ],
  brands: [
    { label: "Solutions", href: "/brands#solutions" },
    { label: "Costs", href: "/brands#costs" },
    { label: "Outcomes", href: "/brands#outcomes" },
    { label: "Process", href: "/brands#process" },
    { label: "FAQ", href: "/brands#faq" },
  ],
};

const columns = [
  {
    heading: "For earners",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Four work types", href: "/#work-types" },
      { label: "Twelve categories", href: "/#categories" },
      { label: "Income ladder", href: "/#ladder" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "For brands",
    links: [
      { label: "Campaign solutions", href: "/brands#solutions" },
      { label: "Indicative costs", href: "/brands#costs" },
      { label: "Reported outcomes", href: "/brands#outcomes" },
      { label: "How a campaign runs", href: "/brands#process" },
      { label: "Brand FAQ", href: "/brands#faq" },
    ],
  },
  {
    heading: "Official Funngro",
    links: [
      { label: "Live site", href: liveSite.home, external: true },
      { label: "Earn on Funngro", href: liveSite.earn, external: true },
      { label: "For brands", href: liveSite.brands, external: true },
      { label: "Official FAQ", href: liveSite.faq, external: true },
      { label: "Contact page", href: liveSite.contact, external: true },
    ],
  },
] as const;

/** Floating centered pill nav — the v2 navigation pattern. */
export function PillNav({ variant }: { variant?: Variant }) {
  const pathname = usePathname();
  const resolved: Variant =
    variant ?? (pathname?.startsWith("/brands") ? "brands" : "youth");
  const isBrands = resolved === "brands";
  const otherHref = isBrands ? "/" : "/brands";
  const otherLabel = isBrands ? "For youth" : "For brands";
  const ctaHref = isBrands ? `mailto:${contact.brands}` : storeLinks.play;
  const ctaLabel = isBrands ? "Talk to Funngro" : "Get the app";
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="sticky top-3 z-50 mx-auto w-full max-w-5xl px-3 sm:px-4"
    >
      <header className="flex h-14 items-center justify-between gap-3 rounded-full border border-line bg-card/90 py-2 pl-4 pr-2 shadow-[0_14px_30px_-20px_rgb(20_18_31/0.45)] backdrop-blur-xl">
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="Funngro — home"
        >
          <span
            aria-hidden="true"
            className="grid size-8 rotate-[-4deg] place-items-center rounded-full bg-coral font-display text-sm font-extrabold text-on-coral transition-transform group-hover:rotate-[4deg]"
          >
            F
          </span>
          <span className="font-display text-base font-extrabold tracking-tight">
            Funngro
          </span>
          <span className="sticker hidden bg-sun px-2 py-0.5 text-[10px] uppercase tracking-wider text-on-sun sm:inline-flex">
            v2
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links[resolved].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-cream hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={otherHref}
            className="group hidden items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold text-muted transition-colors hover:text-ink sm:inline-flex"
          >
            {otherLabel}
            <ArrowUpRight
              className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
          <a
            href={ctaHref}
            {...(isBrands ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-bold text-paper transition-transform hover:scale-[1.03] sm:inline-flex dark:bg-sun dark:text-on-sun"
          >
            {ctaLabel}
          </a>
          <Link
            href={otherHref}
            className="rounded-full border border-line px-3 py-1.5 text-xs font-bold text-muted sm:hidden"
          >
            {otherLabel}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-line text-ink lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 rounded-3xl border border-line bg-card p-3 shadow-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {links[resolved].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-semibold hover:bg-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={ctaHref}
              {...(isBrands
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
              className="mt-2 block rounded-2xl bg-ink px-4 py-3 text-center text-sm font-bold text-paper dark:bg-sun dark:text-on-sun"
            >
              {ctaLabel}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/** Big-wordmark footer — same links and legal text as v1, new layout. */
export function FooterBig() {
  return (
    <footer className="mt-24 border-t-2 border-ink/10 bg-cream/60 dark:bg-card">
      <div className="wrap py-14">
        <p
          aria-hidden="true"
          className="font-display text-[clamp(3.5rem,12vw,9rem)] font-extrabold leading-none tracking-tight text-ink/10 select-none dark:text-paper/10"
        >
          Funngro
        </p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-muted">
              {site.shortDescription}
            </p>
            <div className="mt-5 space-y-1.5 text-sm">
              <p>
                <a
                  href={`mailto:${contact.brands}`}
                  className="font-semibold text-ink underline decoration-coral decoration-2 underline-offset-4"
                >
                  {contact.brands}
                </a>{" "}
                <span className="text-muted">— brands &amp; partnerships</span>
              </p>
              <p>
                <a
                  href={`mailto:${contact.support}`}
                  className="font-semibold text-ink underline decoration-coral decoration-2 underline-offset-4"
                >
                  {contact.support}
                </a>{" "}
                <span className="text-muted">— earner support</span>
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-faint">
                  {column.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted transition-colors hover:text-ink"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-muted transition-colors hover:text-ink"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-7 text-sm leading-relaxed text-faint">
          <address className="not-italic">
            Funngro · {address.street}, {address.locality}, {address.region}{" "}
            {address.postalCode}, India
          </address>
          <p className="mt-3 max-w-2xl">{site.disclaimer}</p>
          <p className="mt-2 max-w-3xl">
            Statistics shown on this site are Funngro&apos;s own published
            figures and are reproduced with attribution. Sample figures labelled
            &ldquo;Illustrative demo data&rdquo; are for layout purposes only.
            and are not Funngro metrics. For official terms, payouts and account
            rules, rely on{" "}
            <a
              href={liveSite.home}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-ink"
            >
              funngro.com
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
