/**
 * Youth / Teenlancer page content (`/`).
 *
 * Facts only — every figure here is a row in FACTS.md with a source.
 * Sample activity inside the demo card is explicitly fictional and labelled
 * "Illustrative demo data" in the UI.
 */

export const hero = {
  eyebrow: "For young India, 14 to 25",
  /** The plan's H1. One per page. */
  h1: "Your skills deserve more than likes.",
  lead:
    "Funngro is where India's biggest brands hand real campaign work to young Indians — brand promotion, content, referrals, sampling and surveys — and pay it out to your UPI. Free to join, no investment.",
  primaryCta: {
    label: "Download the app",
    href: "https://play.google.com/store/apps/details?id=com.wishbanc.funngro",
  },
  secondaryCta: {
    label: "See the four work types",
    href: "#work-types",
  },
  footnote: "Free forever. No subscription, no withdrawal fee.",
} as const;

/** Headline figures. All four verified (FACTS.md §1). */
export const headlineStats = [
  { value: "70 lakh+", label: "Young Indians earning" },
  { value: "5,000+", label: "Brands and companies" },
  { value: "< 24h", label: "Payout window, UPI or bank" },
  { value: "Free", label: "To join, forever" },
] as const;

/** Revenue-side ladder. The site publishes these bands, so we quote them with attribution. */
export const earningsLadder = {
  eyebrow: "The income ladder",
  title: "Three stages, and you pick the pace.",
  intro:
    "Funngro publishes what its tiers typically look like. Where you land depends on the hours you put in and the work you choose — these are indicative bands, not a promise.",
  average: { label: "Average active user", value: "₹4,100 / month" },
  top: { label: "Top 5%", value: "₹18,000+ / month" },
  stages: [
    {
      id: "starter",
      name: "Stage 01 — Starter",
      band: "₹1K–₹3K / month",
      headline: "Start your first income",
      body:
        "Brand recall surveys, product sampling and simple promotion work. Enough to build a habit and a wallet entry.",
      tasks: ["Surveys", "Sampling", "Simple promotion"],
    },
    {
      id: "grower",
      name: "Stage 02 — Grower",
      band: "₹3K–₹7K / month",
      headline: "Multiply and influence",
      body:
        "Refer friends to brands they actually like, and produce content that brands can reuse. Income follows reach.",
      tasks: ["Referrals", "Content creation", "Clan leadership"],
    },
    {
      id: "builder",
      name: "Stage 03 — Builder",
      band: "₹7K–₹15K+ / month",
      headline: "Run it as your own business",
      body:
        "Operate brand promotions at scale, brief other earners, manage campaigns. A micro-business on the platform.",
      tasks: ["Campaign operations", "Team briefings", "Brand partnerships"],
    },
  ],
  progressionNote:
    "Tier names on the platform run Bronze → Silver → Gold → Platinum, with Silver paying a 1.5× multiplier and Gold 2×.",
  disclaimer:
    "Earnings vary by time spent, campaign type and approval rate. Figures shown are Funngro's own published averages and tiers.",
} as const;

export const whyFunngro = {
  eyebrow: "Why Funngro",
  title: "Work, not a wishlist.",
  intro:
    "The difference between a scrolling app and a working one is whether anyone is on the other end. On Funngro a brand is waiting for something specific from you.",
  cards: [
    {
      icon: "wallet",
      title: "You get paid",
      body:
        "Verified tasks pay out straight to UPI. Reviews that need a human take up to 24 hours. Withdraw from the wallet in the app.",
    },
    {
      icon: "sparkles",
      title: "You get better",
      body:
        "Practice projects, briefs and feedback teach writing, editing, research, communication and design basics — the things employers ask about.",
    },
    {
      icon: "folder",
      title: "You build proof",
      body:
        "UGC reels, campaign assets and ambassador work. A portfolio of things brands actually commissioned, not just class projects.",
    },
    {
      icon: "trending",
      title: "You get a rung",
      body:
        "Groscore rises with activity and unlocks better projects. Bronze to Platinum tiers raise both visibility and multipliers.",
    },
  ],
} as const;

/** Verified 3-step flow, from the live homepage copy. */
export const howItWorks = {
  eyebrow: "How it works",
  title: "Three steps from install to payout.",
  lead: "Sign-up takes about two minutes. There is nothing to buy and nothing to invest.",
  steps: [
    {
      n: "01",
      title: "Download and sign up",
      body:
        "Install the app and verify with OTP. You need a smartphone or laptop with internet and a UPI ID.",
    },
    {
      n: "02",
      title: "Pick a brand campaign",
      body:
        "Choose from brand promotion, sampling, referrals, influencer briefs, surveys and content tasks running with 5,000+ brands.",
    },
    {
      n: "03",
      title: "Get paid by UPI or bank",
      body:
        "Complete the work, upload the proof, and the payout lands. Instant for verified tasks, up to 24 hours for ones needing review.",
    },
  ],
  deepLink: {
    label: "Read the 5-step deep dive on Funngro",
    href: "https://www.funngro.com/earn",
  },
} as const;

/** Funngro's own four-way grouping of work (FACTS.md §3). */
export const workTypes = {
  eyebrow: "What you can do",
  title: "Four kinds of work, all from real brands.",
  lead:
    "Not a gig board. Four categories of brand work, described the way Funngro describes them, with the kinds of tasks that sit inside each.",
  items: [
    {
      n: "01",
      icon: "clapperboard",
      title: "Content creation",
      body:
        "Reels, posts, blogs and photos for live brand campaigns. A phone is the studio.",
      examples: [
        "UGC reels for a D2C brand",
        "Brand product photography",
        "Blog posts and captions",
      ],
    },
    {
      n: "02",
      icon: "megaphone",
      title: "Brand promotion",
      body:
        "Share, post and talk about brands you already follow. Paid for genuine recommendations, not scripted applause.",
      examples: [
        "Brand recall surveys",
        "Social media posts",
        "Influencer briefs",
        "Ambassador campaigns",
      ],
    },
    {
      n: "03",
      icon: "users",
      title: "Referrals",
      body:
        "Bring friends to brands they will actually like. You earn when they sign up, transact, or stay.",
      examples: [
        "Friend invites to fintech apps",
        "Peer onboarding for D2C brands",
        "Clan referrals",
      ],
    },
    {
      n: "04",
      icon: "list-checks",
      title: "Micro tasks",
      body:
        "Sampling, surveys, app testing and product ideation. Small, quick, and paid per task.",
      examples: [
        "Try a product and review it",
        "Answer a brand survey",
        "Test an app and report issues",
        "Suggest product improvements",
      ],
    },
  ],
} as const;

/** The twelve categories named in the Google Play and App Store listings. */
export const categories = {
  eyebrow: "The full list",
  title: "Twelve ways work gets done here.",
  lead:
    "The categories Funngro lists for earners across its store listings — useful if you are matching a skill you already have to something paid.",
  items: [
    { icon: "share-2", title: "Social Media Marketing" },
    { icon: "film", title: "Video Editing & Creation" },
    { icon: "layout", title: "Website Designing" },
    { icon: "mic", title: "Influencer Marketing" },
    { icon: "smartphone", title: "Mobile App Development" },
    { icon: "graduation-cap", title: "Campus Ambassador" },
    { icon: "clipboard-list", title: "Research & Survey" },
    { icon: "table", title: "Data Entry" },
    { icon: "audio-lines", title: "Voice-Over" },
    { icon: "pen-line", title: "Content Writing" },
    { icon: "pen-tool", title: "Graphic Designing" },
    { icon: "app-window", title: "App Testing" },
  ],
  sourceNote:
    "Category list as published in the Funngro Google Play and App Store listings.",
} as const;

/** Named product mechanics, so the page explains what the app actually is. */
export const mechanics = {
  eyebrow: "Inside the app",
  title: "The vocabulary you will meet.",
  lead:
    "Funngro's own product names, defined. Reading these before you sign up saves a lot of confusion later.",
  items: [
    {
      name: "Toffee Projects",
      body: "Quick tasks — surveys, app downloads, games. Unlimited, fast approval, small amounts.",
    },
    {
      name: "Evaluation Projects",
      body: "Unpaid practice that raises your Groscore and gets you considered for paid company work.",
    },
    {
      name: "Company Projects",
      body: "The paid brand work. Access widens as your Groscore and consistency grow.",
    },
    {
      name: "Groscore",
      body: "Activity score from projects, referrals and daily check-ins. Higher score unlocks better projects.",
    },
    {
      name: "Share & Earn",
      body: "Known as Earnify. Share a project link; earn when someone completes it through you.",
    },
    {
      name: "Happy Hour",
      body: "6–10 PM IST, when fresh projects and contests drop. Logging in then is worth more.",
    },
    {
      name: "Clans",
      body: "Groups with a Clan Leader who answers queries and shares contests and openings first.",
    },
    {
      name: "Arcade & SheLancer",
      body: "Separate Funngro surfaces for games and for part-time work — both live on the main site.",
    },
  ],
} as const;

export const referral = {
  eyebrow: "Referrals",
  title: "Five rupees, then five percent.",
  lead:
    "If someone joins with your invite and completes their first project, you earn ₹5 — and 5% of their earnings for life.",
  facts: [
    { label: "First project they complete", value: "₹5" },
    { label: "Share of their earnings, ongoing", value: "5%" },
    { label: "Spin reward", value: "Up to ₹1,000" },
    { label: "Free spins", value: "3 to start, 1/day" },
  ],
} as const;

export const trust = {
  eyebrow: "Why this is not a fly-by-night app",
  title: "Featured on Shark Tank India, backed by SucSEED.",
  lead:
    "Funngro pitched a platform where young India earns from real brand campaigns. The pitch brought an investment from Amit Jain, followed by one from SucSEED.",
  points: [
    {
      title: "National television",
      body: "Featured on Shark Tank India, Season 2. The pitch is on YouTube.",
    },
    {
      title: "Backed, not just bootstrapped",
      body: "Investment from Amit Jain, then a follow-on round from SucSEED.",
    },
    {
      title: "Payments that land",
      body: "UPI and bank transfer, with published response times and a published support inbox.",
    },
    {
      title: "Published terms",
      body: "Privacy policy and terms and conditions, both linked from the footer of the live site.",
    },
  ],
  beforeAfter: [
    { before: "40,000", after: "70 lakh", label: "Young Indians earning" },
    { before: "170", after: "5,000+", label: "Brand partners" },
  ],
} as const;

/**
 * FAQ. Kept short, factual and drawn from FACTS.md.
 * The same array feeds the visible accordion and the FAQPage JSON-LD, so the
 * structured data can never drift from what a visitor actually reads.
 */
export const faqs: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: "Who can join Funngro?",
    answer:
      "Young Indians between 14 and 25. Sign-up takes about two minutes: install the app, verify with OTP, and you are in.",
  },
  {
    question: "Is there any fee to join?",
    answer:
      "No. Funngro is free forever, with no subscription and no withdrawal fee. Brands pay Funngro, not the other way round.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Approved earnings land in your Funngro wallet, and you withdraw to a UPI ID or bank account from the Wallet section of the app. Verified tasks pay instantly; work needing a human review can take up to 24 hours.",
  },
  {
    question: "What kind of work can I do?",
    answer:
      "Four core categories: content creation, brand promotion, referrals, and micro tasks such as sampling, surveys, app testing and product ideation. Across the platform Funngro lists twelve work categories including video editing, graphic design, voice-over and content writing.",
  },
  {
    question: "How much can I earn?",
    answer:
      "Funngro publishes an average of around ₹4,100 a month for active users, with the top 5% at ₹18,000+. Published tier bands run ₹1K–₹3K for starters, ₹3K–₹7K for growers and ₹7K–₹15K+ for builders. Your result depends on hours put in and which campaign types you pick, and earnings are not guaranteed.",
  },
  {
    question: "Do I need a PAN card or an investment?",
    answer:
      "No investment is needed. Funngro states you can earn without a PAN card through Toffee Projects such as surveys, app downloads and games, and via Share & Earn and contests.",
  },
  {
    question: "Is there an earnings limit?",
    answer:
      "Funngro states there is no earning cap — how much you earn depends on the number of projects you complete.",
  },
  {
    question: "What happens if my work is sent back?",
    answer:
      "A project can be marked for rework when it is incomplete or does not match the company's instructions. The feedback explains what to fix, and the in-app support team is reachable from the Help icon.",
  },
  {
    question: "Is Funngro safe and legitimate?",
    answer:
      "Funngro states it is a safe platform that partners with trusted brands and uses secure transactions. We are an independent redesign concept, not Funngro — for terms, payouts and account rules, always rely on the official app and the terms on funngro.com.",
  },
];

export const finalCta = {
  title: "Your first rupee is three taps away.",
  body:
    "Install the app, verify with OTP, and pick a campaign. Brands are already waiting on the other side.",
  primary: { label: "Download on Google Play", href: "https://play.google.com/store/apps/details?id=com.wishbanc.funngro" },
  secondary: { label: "Get it on the App Store", href: "https://apps.apple.com/in/app/funngro/id1579361075" },
} as const;

/**
 * Sample activity for the hero demo card.
 *
 * Fictional. Names are initials and cities are real, because a row of
 * identical placeholder text would misrepresent what the UI looks like.
 * Rendered behind a visible "Illustrative demo data" label.
 */
export const demoActivity = [
  { city: "Pune", task: "Brand post", amount: "+₹780" },
  { city: "Jaipur", task: "App test", amount: "+₹95" },
  { city: "Kolkata", task: "Reels brief", amount: "+₹1,820" },
  { city: "Lucknow", task: "Referral", amount: "+₹120" },
  { city: "Nashik", task: "Sampling", amount: "+₹190" },
  { city: "Indore", task: "Survey", amount: "+₹80" },
  { city: "Kochi", task: "Content", amount: "+₹920" },
  { city: "Surat", task: "Brand promo", amount: "+₹640" },
] as const;

export const demoCard = {
  label: "Illustrative demo data",
  note: "Sample activity shown for layout purposes. Not Funngro metrics.",
  rows: [
    { label: "Payout rail", value: "UPI / bank" },
    { label: "Payout window", value: "Under 24h" },
    { label: "Fee to join", value: "₹0" },
  ],
  earnedThisWeek: {
    label: "Paid this week",
    value: "₹11,61,469",
  },
} as const;