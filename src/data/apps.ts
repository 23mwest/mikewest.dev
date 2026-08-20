// Shipped apps that aren't full case studies. Lighter than case-studies.ts:
// name, one-liner, a few features, a demo video, and store links.

export type AppLink = { label: string; href: string };

export type App = {
  name: string;
  tagline: string;
  features: string[];
  video: string; // YouTube embed URL, also used for the card thumbnail
  links: AppLink[];
};

export const apps: App[] = [
  {
    name: "SIG Connect",
    tagline:
      "SIG Sauer's companion app, with content navigation, streaming video, and an in-app game.",
    features: ["Navigation", "Video player and streaming", "Scramble game"],
    video: "https://www.youtube.com/embed/yTbrs7jvDo4",
    links: [
      { label: "iOS", href: "https://sigsauer.onelink.me/oWXN/k2dizrtq" },
      { label: "Android", href: "https://sigsauer.onelink.me/oWXN/cwwd3znp" },
      { label: "Website", href: "https://www.sigsauer.com/sigconnect" },
    ],
  },
  {
    name: "Defend",
    tagline: "Tactacam's cellular security camera companion app.",
    features: ["Camera activation"],
    video: "https://www.youtube.com/embed/PUBCIxhLWvI",
    links: [
      {
        label: "iOS",
        href: "https://apps.apple.com/us/app/defend-by-tactacam/id6467141793",
      },
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.tactacam.defend",
      },
      { label: "Web", href: "https://account.defendcellcam.com" },
    ],
  },
];
