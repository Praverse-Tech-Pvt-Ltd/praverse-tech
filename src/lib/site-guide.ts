import {
  CURRENT_OFFERINGS,
  RESEARCH_PROGRAMS,
} from "@/lib/data";
import {
  COMPANY_CITY,
  COMPANY_EMAIL,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  SITE_NAME,
} from "@/lib/site";
import {
  MENNIE_FULL_NAME,
  MENNIE_NAME,
  MENNIE_WAITLIST_LABEL,
} from "@/lib/mennie";

export type SiteGuideLink = {
  label: string;
  href: string;
};

export type SiteGuidePage = {
  name: string;
  route: string;
  description: string;
  keywords: string[];
  suggestedActions: SiteGuideLink[];
};

export type SiteGuideReply = {
  message: string;
  suggestions: SiteGuideLink[];
};

export const siteGuideQuickActions = [
  { label: "What we build", query: "What does Praverse Tech do?" },
  { label: "Explore domains", query: "What domains do you work in?" },
  { label: MENNIE_NAME, query: `Where can I learn about ${MENNIE_NAME}?` },
  { label: "Founder insights", query: "Where is the founder blog?" },
  { label: "Contact us", query: "How do I contact the company?" },
];

export const siteGuideWelcome =
  "Hi - I'm the Praverse site guide. I can help you explore what we build, find the right page, or answer questions about the website.";

export const siteGuidePages: SiteGuidePage[] = [
  {
    name: "Home",
    route: "/",
    description:
      "Overview of Praverse Tech, what the company builds today, and how current offerings differ from R&D programs.",
    keywords: ["home", "overview", "what does praverse do", "what we build", "available now"],
    suggestedActions: [
      { label: "Home", href: "/" },
      { label: "Domains", href: "/domains" },
      { label: "Enterprise", href: "/enterprise" },
    ],
  },
  {
    name: "About",
    route: "/about",
    description:
      "Background on who Praverse Tech is, what it builds, where it focuses today, and what differentiates the company.",
    keywords: ["about", "who are you", "company", "founder led", "credibility"],
    suggestedActions: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    name: "Domains",
    route: "/domains",
    description:
      "A structured list of current offerings and exploratory R&D programs across healthcare, pharma, and industrial intelligence.",
    keywords: ["domains", "areas", "industries", "what domains", "available now", "in development"],
    suggestedActions: [
      { label: "Explore domains", href: "/domains" },
      { label: "Enterprise", href: "/enterprise" },
    ],
  },
  {
    name: "Enterprise",
    route: "/enterprise",
    description:
      "Enterprise-facing AI solutions, delivery models, trust controls, and regulated-industry use cases.",
    keywords: ["enterprise", "services", "solutions", "regulated industries", "ai services"],
    suggestedActions: [
      { label: "Enterprise", href: "/enterprise" },
      { label: "Discuss a project", href: "/contact" },
    ],
  },
  {
    name: "Insights",
    route: "/blog",
    description:
      "Blog and insight hub with founder perspectives and posts on healthcare AI, pharma, and applied systems.",
    keywords: ["blog", "insights", "articles", "founder blog", "founder insights"],
    suggestedActions: [
      { label: "Insights", href: "/blog" },
      { label: "Founder article", href: "/blog/future-of-ai-in-healthcare-pratham-shrivastav" },
    ],
  },
  {
    name: "Founder Article",
    route: "/blog/future-of-ai-in-healthcare-pratham-shrivastav",
    description:
      "Founder article on the future of AI in healthcare, written by Pratham Shrivastav.",
    keywords: ["founder", "pratham", "personal blog", "future of ai in healthcare", "founder article"],
    suggestedActions: [
      { label: "Read founder article", href: "/blog/future-of-ai-in-healthcare-pratham-shrivastav" },
      { label: "Back to insights", href: "/blog" },
    ],
  },
  {
    name: MENNIE_NAME,
    route: "/healthmate",
    description:
      `${MENNIE_NAME} overview page covering the in-development care intelligence program, teaser, and waitlist/briefing actions.`,
    keywords: ["healthmate", "mennie", "robot", "care intelligence", "waitlist", "briefing"],
    suggestedActions: [
      { label: MENNIE_NAME, href: "/healthmate" },
      { label: MENNIE_WAITLIST_LABEL, href: "/healthmate" },
    ],
  },
  {
    name: "Contact",
    route: "/contact",
    description:
      "Primary route for submitting an inquiry, contacting the company, and starting a project conversation.",
    keywords: ["contact", "inquiry", "email", "phone", "reach out", "submit inquiry"],
    suggestedActions: [
      { label: "Contact us", href: "/contact" },
      { label: `Email ${COMPANY_EMAIL}`, href: `mailto:${COMPANY_EMAIL}` },
    ],
  },
  {
    name: "Privacy Policy",
    route: "/privacy",
    description: "Main privacy policy for website and inquiry-related data collection.",
    keywords: ["privacy", "policy", "legal", "data policy"],
    suggestedActions: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    name: "Terms of Service",
    route: "/terms",
    description: "Main website terms of service and submission-related legal information.",
    keywords: ["terms", "legal", "terms of service", "website terms"],
    suggestedActions: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function uniqueLinks(links: SiteGuideLink[]) {
  const seen = new Set<string>();
  return links.filter((link) => {
    const key = `${link.label}:${link.href}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function topMatchingPages(query: string) {
  const normalizedQuery = normalize(query);
  const queryTokens = normalizedQuery.split(" ").filter(Boolean);

  return siteGuidePages
    .map((page) => {
      const haystack = normalize(
        [page.name, page.description, ...page.keywords].join(" "),
      );

      const score = queryTokens.reduce((total, token) => {
        if (haystack.includes(token)) {
          return total + 1;
        }
        return total;
      }, 0);

      return { page, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.page);
}

export function getSiteGuideReply(rawQuery: string): SiteGuideReply {
  const query = normalize(rawQuery);

  if (!query) {
    return {
      message: siteGuideWelcome,
      suggestions: siteGuideQuickActions.map((action) => ({
        label: action.label,
        href: "#",
      })),
    };
  }

  if (
    query.includes("what does praverse") ||
    query.includes("what we build") ||
    query.includes("what do you do")
  ) {
    return {
      message:
        "Praverse Tech builds AI products and applied intelligent systems for healthcare, pharma, and industrial intelligence teams. The best starting points are the Home, Domains, and Enterprise pages.",
      suggestions: [
        { label: "Home", href: "/" },
        { label: "Explore domains", href: "/domains" },
        { label: "Enterprise solutions", href: "/enterprise" },
      ],
    };
  }

  if (query.includes("healthmate") || query.includes("mennie")) {
    return {
      message:
        `${MENNIE_NAME} stands for ${MENNIE_FULL_NAME}. It is Praverse Tech's in-development care intelligence program, and the ${MENNIE_NAME} page includes the teaser, waitlist, and NDA briefing flows.`,
      suggestions: [
        { label: MENNIE_NAME, href: "/healthmate" },
        { label: MENNIE_WAITLIST_LABEL, href: "/healthmate" },
      ],
    };
  }

  if (
    query.includes("contact") ||
    query.includes("inquiry") ||
    query.includes("reach") ||
    query.includes("email")
  ) {
    return {
      message: `You can submit an inquiry on the Contact page or reach Praverse Tech directly at ${COMPANY_EMAIL} and ${COMPANY_PHONE_DISPLAY}. The company is based in ${COMPANY_CITY}.`,
      suggestions: [
        { label: "Contact us", href: "/contact" },
        { label: `Email ${COMPANY_EMAIL}`, href: `mailto:${COMPANY_EMAIL}` },
        { label: `Call ${COMPANY_PHONE_DISPLAY}`, href: COMPANY_PHONE_TEL },
      ],
    };
  }

  if (
    query.includes("founder") ||
    query.includes("personal blog") ||
    query.includes("founder blog")
  ) {
    return {
      message:
        "Founder insights live in the Insights section. The current founder article is 'The Future of AI in Healthcare,' and you can also browse the full blog index from the Insights page.",
      suggestions: [
        { label: "Founder article", href: "/blog/future-of-ai-in-healthcare-pratham-shrivastav" },
        { label: "Insights", href: "/blog" },
      ],
    };
  }

  if (
    query.includes("domain") ||
    query.includes("available now") ||
    query.includes("in development")
  ) {
    const availableNow = CURRENT_OFFERINGS
      .map((item) => item.title)
      .slice(0, 4)
      .join(", ");
    const research = RESEARCH_PROGRAMS.map((item) => item.title).join(", ");

    return {
      message: `Current offerings include ${availableNow}. Longer-horizon R&D programs such as ${research} are shown separately so visitors can distinguish active work from exploratory initiatives.`,
      suggestions: [
        { label: "Explore domains", href: "/domains" },
        { label: "Enterprise solutions", href: "/enterprise" },
      ],
    };
  }

  if (query.includes("service") || query.includes("enterprise")) {
    return {
      message:
        "For commercial services and deployment-oriented work, the Enterprise page is the clearest summary. It covers delivery models, trust controls, and the sectors Praverse serves today.",
      suggestions: [
        { label: "Enterprise solutions", href: "/enterprise" },
        { label: "Discuss a project", href: "/contact" },
      ],
    };
  }

  const matches = topMatchingPages(query).slice(0, 3);

  if (matches.length > 0) {
    return {
      message: `I found a few useful places based on your question: ${matches
        .map((page) => page.name)
        .join(", ")}.`,
      suggestions: uniqueLinks(matches.flatMap((page) => page.suggestedActions)).slice(
        0,
        4,
      ),
    };
  }

  return {
    message:
      `I can help you explore what Praverse builds, find ${MENNIE_NAME}, open founder insights, or take you to the contact page for an inquiry.`,
    suggestions: [
      { label: "What we build", href: "/" },
      { label: "Explore domains", href: "/domains" },
      { label: "Founder insights", href: "/blog" },
      { label: "Contact us", href: "/contact" },
    ],
  };
}
