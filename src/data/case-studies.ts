// Case study content. Plain data so the pages stay easy to edit.
// Order here is the order used for the index grid and prev/next nav.

export type Fact = { label: string; value: string };
export type Outcome = { stat: string; label: string };
export type NarrativeBlock = { heading: string; body: string };
export type Media =
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; title: string; caption?: string };
export type CaseLink = { label: string; href: string };

export type CaseStudy = {
  slug: string;
  name: string;
  summary: string;
  facts: Fact[];
  outcomes: Outcome[];
  narrative: NarrativeBlock[];
  features: string[];
  tech: {
    stack: string[];
    integrations?: string[];
    highlights: string[];
  };
  media: Media[];
  links: CaseLink[];
  relatedService: { title: string; description: string; href: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "on-point-instrument-sharpening",
    name: "On-Point Instrument Sharpening",
    summary:
      "A full-stack scheduling and shop-management app for a dental-instrument sharpening business. Empty repo to shipped MVP in three months, on time and under budget.",
    facts: [
      { label: "Role", value: "Sole developer" },
      { label: "Timeline", value: "3 months to MVP" },
      { label: "Client", value: "On-Point Instrument Sharpening" },
      { label: "Platform", value: "Public web form + Admin PWA" },
    ],
    outcomes: [
      { stat: "On time", label: "Shipped by the agreed launch date" },
      { stat: "Under budget", label: "Delivered below the original quote" },
      { stat: "0 → 1", label: "Concept to production MVP, solo" },
    ],
    narrative: [
      {
        heading: "The problem",
        body: "A small business that sharpens dental instruments was running scheduling and order tracking by hand. They needed a way for clients to book online and a single place to run the shop, without a heavy tool or a long build.",
      },
      {
        heading: "What I built",
        body: "Two surfaces from one codebase: a public-facing scheduling form for clients, and an admin PWA to run the shop day to day. Clients book against real availability; the owner manages appointments, tracks orders, and talks to clients from one screen.",
      },
      {
        heading: "How it went",
        body: "Scope stayed tight and focused on the core booking-and-manage loop. The MVP shipped in three months, on time and under the original budget, and is live for the business now.",
      },
    ],
    features: [
      "Appointment scheduling with time blocking",
      "Order tracking",
      "Two-way client messaging over SMS",
      "Transactional email notifications",
      "Client testimonials",
    ],
    tech: {
      stack: ["React", "Next.js", "TypeScript", "Supabase (Postgres)"],
      integrations: ["Twilio (SMS)", "Resend (email)"],
      highlights: [
        "Public booking form and admin app share one Next.js + TypeScript codebase, with Supabase Postgres as the single source of truth.",
        "Two-way client messaging built on Twilio so the owner texts clients from inside the admin app.",
        "Transactional email (confirmations, notifications) handled through Resend.",
        "Admin experience delivered as an installable PWA so the shop can run it like a native app.",
      ],
    },
    media: [
      {
        type: "image",
        src: "/on-point-home-page.png",
        alt: "On-Point Instrument Sharpening homepage",
        caption: "The public homepage and scheduling entry point.",
      },
    ],
    links: [
      {
        label: "Visit the site",
        href: "https://onpointinstrumentsharpening.com",
      },
    ],
    relatedService: {
      title: "MVP & new product builds",
      description:
        "From idea to a live, usable product, web or mobile, with the infrastructure to grow. This is exactly that engagement.",
      href: "/#services",
    },
  },
  {
    slug: "feathersnap",
    name: "FeatherSnap",
    summary:
      "A social bird-watching platform for smart-camera owners. Taken from MVP to roughly 50,000 monthly active users, first as senior engineer, then as lead.",
    facts: [
      { label: "Role", value: "Senior engineer → Lead developer" },
      { label: "Timeline", value: "MVP in 9 months" },
      { label: "Client", value: "Tactacam" },
      { label: "Platform", value: "iOS, Android, Web" },
    ],
    outcomes: [
      { stat: "~50k", label: "Monthly active users within two years" },
      { stat: "9 mo", label: "Concept to launched MVP" },
      {
        stat: "< 2 mo",
        label: "Social feed frontend + e2e-tested data contracts",
      },
    ],
    narrative: [
      {
        heading: "The product",
        body: "FeatherSnap turns a smart bird camera into a social platform: owners get a feed of captures, automatic bird identification, and a way to share and follow. It spans iOS, Android, and web from a shared codebase.",
      },
      {
        heading: "My role",
        body: "I joined as a senior engineer before launch and moved into the lead developer seat after it. Pre-launch I owned large parts of the frontend and the data contracts between app and backend; post-launch I led the work that scaled it.",
      },
      {
        heading: "Scaling it",
        body: "The MVP launched in nine months and grew to roughly 50,000 monthly active users within two years. The build ran on AWS CDK-provisioned serverless infrastructure so it could scale with the user base.",
      },
    ],
    features: [
      "Social media feed",
      "Automatic bird identification",
      "Authentication",
      "Push notifications",
      "In-app e-commerce store",
    ],
    tech: {
      stack: [
        "React Native + Expo (mobile)",
        "React + Next.js (web)",
        "TypeScript",
        "AWS CDK: API Gateway, Lambda, DynamoDB",
      ],
      highlights: [
        "Built the social-feed frontend plus the data contracts and end-to-end tests for the platform in under two months.",
        "Shipped an in-app e-commerce store using an authenticated web view disguised as a native screen, so purchases felt native without a separate native build.",
        "Serverless backend on AWS CDK (API Gateway, Lambda, DynamoDB) provisioned as code and built to scale with the user base.",
      ],
    },
    media: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/7SYV-MQ8Uno",
        title: "FeatherSnap product walkthrough",
      },
    ],
    links: [
      {
        label: "App Store (iOS)",
        href: "https://apps.apple.com/us/app/feathersnapcam/id6503296944",
      },
      {
        label: "Google Play (Android)",
        href: "https://play.google.com/store/apps/details?id=com.feathersnapcam.mobile&pli=1",
      },
      { label: "Web", href: "https://account.feathersnapcam.com/en/login" },
    ],
    relatedService: {
      title: "Mobile apps (React Native / Expo)",
      description:
        "iOS and Android from one codebase, through app-store review and into users' hands, then scaled. That is the shape of this project.",
      href: "/#services",
    },
  },
];

export const getAdjacent = (slug: string) => {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return {
    prev: i > 0 ? caseStudies[i - 1] : null,
    next: i < caseStudies.length - 1 ? caseStudies[i + 1] : null,
  };
};
