/**
 * For Brands page content (`/brands`).
 *
 * All brand-side performance figures are Funngro's own published numbers from a
 * single representative fintech campaign whose identity is under NDA. They are
 * used here with that caveat attached, per FACTS.md §4.
 */

export const hero = {
  eyebrow: "For brands",
  /** The plan's H1. One per page. */
  h1: "Reach young India through campaigns powered by real people.",
  lead:
    "Meta sells impressions. Funngro pays for verified actions instead — promotion, trials, referrals and feedback from young Indians who actually use your products.",
  primaryCta: { label: "Talk to the brands team", href: "mailto:hello@funngro.com" },
  secondaryCta: { label: "See the campaign types", href: "#solutions" },
  responseNote: "hello@funngro.com — a human replies within one business day.",
} as const;

export const headlineStats = [
  { value: "70 lakh+", label: "Young Indians on the platform" },
  { value: "5,000+", label: "Brands already working with earners" },
  { value: "14–25", label: "Core age band, with city-level targeting" },
  { value: "₹2–5 lakh", label: "Typical first pilot" },
] as const;

/** Funngro's twelve brand solutions, from its own /for-brands page. */
export const solutions = {
  eyebrow: "Twelve campaign types",
  title: "Pick the behaviour you need. Not a format.",
  lead:
    "Each of these exists because a brand somewhere asked for exactly that. Start from the outcome you want and work backwards to the work type.",
  items: [
    {
      n: "01",
      tag: "Awareness",
      title: "Brand promotion",
      body:
        "Brand recall, awareness and social posts from earners who already follow you. Verified at the action level.",
      bestFor: "New launches, refreshes, category education",
      icon: "megaphone",
    },
    {
      n: "02",
      tag: "Trial",
      title: "Sampling campaigns",
      body:
        "Real product trials with structured feedback from the right cohort, city and age band.",
      bestFor: "FMCG, beauty, food and beverage launches",
      icon: "package",
    },
    {
      n: "03",
      tag: "Peer growth",
      title: "Referral programs",
      body:
        "Friend-to-friend acquisition with Clan multipliers built in. Peer trust is the conversion mechanism.",
      bestFor: "Fintech, edtech, gaming",
      icon: "users",
    },
    {
      n: "04",
      tag: "Authority",
      title: "Influencer marketing",
      body:
        "Micro and nano creators across categories. Brief-led, and approved before anything publishes.",
      bestFor: "Category-specific authority",
      icon: "mic",
    },
    {
      n: "05",
      tag: "Assets",
      title: "Content creation (UGC)",
      body:
        "User-generated reels, posts, blogs and photos. You get the asset rights for ads and social libraries.",
      bestFor: "Ad creative, social libraries, e-commerce listings",
      icon: "clapperboard",
    },
    {
      n: "06",
      tag: "Research",
      title: "Brand surveys & insights",
      body:
        "Structured research, NPS and brand-tracker studies, targeted demographically.",
      bestFor: "Ongoing brand health monitoring",
      icon: "clipboard-list",
    },
    {
      n: "07",
      tag: "QA",
      title: "App testing & QA",
      body:
        "Real users on real devices in real environments. Bug reports alongside usability feedback.",
      bestFor: "Pre-launch and version validation",
      icon: "app-window",
    },
    {
      n: "08",
      tag: "Pre-build",
      title: "Product ideation",
      body:
        "Concept-test new ideas against the actual target cohort. Quick rounds, unfiltered reactions.",
      bestFor: "Product teams before you build",
      icon: "lightbulb",
    },
    {
      n: "09",
      tag: "Revenue",
      title: "Sales support & conversion",
      body:
        "Affiliate-style promotion with conversion tracking. Pay per sale, not per impression.",
      bestFor: "E-commerce and subscription brands",
      icon: "shopping-cart",
    },
    {
      n: "10",
      tag: "Retention",
      title: "Loyalty & re-engagement",
      body:
        "Always-on engagement loops with people who already bought from you.",
      bestFor: "Retention-focused and subscription products",
      icon: "refresh-cw",
    },
    {
      n: "11",
      tag: "On-ground",
      title: "Campus ambassadors",
      body:
        "Physical presence in colleges: posters, events and peer outreach.",
      bestFor: "Brands chasing student-specific moments",
      icon: "graduation-cap",
    },
    {
      n: "12",
      tag: "Always on",
      title: "Brand partnerships",
      body:
        "Ongoing creator deals with top earners, on a monthly retainer model.",
      bestFor: "Brands building consistent youth presence",
      icon: "handshake",
    },
  ],
} as const;

/** Indicative cost bands published in Funngro's own FAQ. */
export const pricingBands = {
  eyebrow: "Indicative costs",
  title: "What a verified action costs.",
  lead:
    "Ranges Funngro publishes for each campaign type. Your mix, vertical and cohort produce different numbers — these are the starting conversation, not a quote.",
  bands: [
    { type: "Brand promotion", range: "₹30 – ₹80", unit: "per verified action" },
    { type: "Referral campaigns", range: "₹80 – ₹150", unit: "per verified signup" },
    { type: "UGC content", range: "₹150 – ₹500", unit: "per asset" },
    { type: "Sampling", range: "₹40 – ₹120", unit: "per pickup" },
    { type: "Sales support", range: "2 – 6%", unit: "of sale value" },
  ],
  footnote:
    "Influencer briefs and full brand partnerships are priced per campaign. Funngro publishes a typical first pilot at ₹2–5 lakh, with three-campaign retainers available after that.",
} as const;

export const outcomes = {
  eyebrow: "Reported outcomes",
  title: "What one fintech campaign returned.",
  lead:
    "Funngro's published numbers from a single representative fintech campaign. The brand is under NDA; your campaign mix, vertical and cohort will produce different ranges.",
  stats: [
    {
      value: "₹38",
      label: "CPA on Funngro",
      compare: "₹95–₹150 industry",
    },
    {
      value: "68%",
      label: "Completion rate",
      compare: "8–12% industry",
    },
    {
      value: "100%",
      label: "Verified actions",
      compare: "No bot traffic",
    },
    {
      value: "3×",
      label: "Repeat over 6 months",
      compare: "Same brand",
    },
  ],
  sourceNote:
    "Source: figures published on Funngro's own /for-brands page. Not independently verified by this redesign.",
} as const;

export const process = {
  eyebrow: "How a campaign runs",
  title: "Four steps, and a 20-minute call to start.",
  lead:
    "Funngro's published onboarding starts with a demo call, not a self-serve signup. Here is the flow as described on their site.",
  steps: [
    {
      n: "01",
      title: "Book a 20-minute demo",
      body:
        "Funngro reviews your current CPA, recommends a campaign mix, and gives a projection against your Meta benchmark.",
    },
    {
      n: "02",
      title: "Choose your campaign mix",
      body:
        "Pick from twelve work types, a target cohort, and the cities you want. Funngro shares prior campaign data on the call.",
    },
    {
      n: "03",
      title: "Earners complete the tasks",
      body:
        "Young Indians on the platform pick up the work, complete it, and submit proof. Pay is per verified action.",
    },
    {
      n: "04",
      title: "Review and scale",
      body:
        "Funngro reports on completed and verified actions. Three-campaign retainers follow a successful pilot.",
    },
  ],
} as const;

export const verticals = {
  eyebrow: "Coverage",
  title: "From fintech to FMCG.",
  lead:
    "If your audience is 14 to 25 in India, Funngro states it has the cohort and city mix to reach them.",
  items: [
    "Fintech",
    "D2C",
    "Beauty",
    "FMCG",
    "Gaming",
    "Edtech",
    "Food & Beverage",
    "Commerce",
    "Travel",
    "Entertainment",
    "Wellness",
    "Lifestyle",
  ],
} as const;

export const whyBrands = {
  eyebrow: "Why it works",
  title: "Reach is plentiful. Action is scarce.",
  lead:
    "Funngro's stated position is that it does not sell impressions, it sells verified action from an opted-in audience. Three practical consequences.",
  cards: [
    {
      icon: "check-check",
      title: "You pay for the action",
      body:
        "Per verified task, referral, content asset or first transaction. Stop paying for eyeballs you cannot attribute.",
    },
    {
      icon: "quote",
      title: "The recommendation is genuine",
      body:
        "Earners promote brands they already use. A peer telling a friend about a product they like is a different message from an ad.",
    },
    {
      icon: "map-pin",
      title: "Cohort-level targeting",
      body:
        "Target by age band and city, not by an interest graph. Useful when a launch only works in specific metros.",
    },
    {
      icon: "file-check",
      title: "Submission proof",
      body:
        "Tasks are submitted with proof and reviewed before payment, which is what keeps completion rates honest.",
    },
  ],
} as const;

/** Brand-side FAQ. Same array feeds visible content and FAQPage JSON-LD. */
export const faqs: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: "How do I start a campaign?",
    answer:
      "Funngro's published process starts with a 20-minute demo. They review your current CPA, recommend a campaign mix, and give a projection against your Meta benchmark. Typical first pilots start at ₹2–5 lakh.",
  },
  {
    question: "What does a verified action cost?",
    answer:
      "Funngro publishes indicative bands: brand promotion ₹30–₹80 per action, referral campaigns ₹80–₹150 per verified signup, UGC ₹150–₹500 per asset, sampling ₹40–₹120 per pickup, and sales support at 2–6% of sale value. Influencer briefs and full partnerships are custom.",
  },
  {
    question: "How is this different from buying Meta ads?",
    answer:
      "Meta optimises for impressions and charges for them. Funngro states it pays per verified action: a brand task, a referral, a content asset, a first transaction or a sale conversion. Its published fintech benchmark shows ₹38 CPA against ₹117 on Meta for the same campaign.",
  },
  {
    question: "What results can I expect?",
    answer:
      "Funngro publishes these figures for one representative fintech campaign: ₹38 CPA, 68% completion rate, 100% verified actions and 3× repeat over six months. The brand is under NDA. Your results will differ by campaign mix, vertical and cohort, and these numbers are not independently verified.",
  },
  {
    question: "Who can I reach?",
    answer:
      "Funngro states its audience is young Indians aged 14 to 25, with city-level targeting, across verticals including fintech, D2C, beauty, FMCG, gaming, edtech, food and beverage, commerce, travel, entertainment, wellness and lifestyle.",
  },
  {
    question: "Do I get the content rights?",
    answer:
      "For UGC content creation, Funngro states you get the asset rights, so you can use the content for advertising, social libraries and e-commerce listings.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "Email hello@funngro.com, which Funngro routes to its brands and partnerships team with a stated response time under one business day. There is a gated form for investor deck requests.",
  },
];

export const finalCta = {
  title: "Your next campaign starts with the right audience.",
  body:
    "Tell Funngro what you are trying to do, who you are trying to reach, and what you want to test. They reply with a cohort, a work type and a starting point — no pitch deck, no pressure.",
  primary: { label: "Email hello@funngro.com", href: "mailto:hello@funngro.com" },
  secondary: {
    label: "See the real /for-brands page",
    href: "https://www.funngro.com/for-brands",
  },
} as const;

/** Sample dashboard figures for the hero mock. Fictional, labelled in the UI. */
export const demoDashboard = {
  label: "Illustrative demo data",
  note: "Not Funngro metrics. Layout sample only.",
  metrics: [
    { label: "Reach", value: "1,42,000" },
    { label: "Verified actions", value: "9,860" },
    { label: "CPA", value: "₹42" },
  ],
} as const;