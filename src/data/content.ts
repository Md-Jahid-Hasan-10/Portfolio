/**
 * ============================================================================
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to change copy, links, projects, skills and dates.
 *  Components only render from this file — never hardcode text in components.
 * ============================================================================
 */

export const TODO = "TODO_";

/* -------------------------------------------------------------------------- */
/*  Site metadata                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Resolve the site's public URL.
 *
 * Priority:
 *   1. `NEXT_PUBLIC_SITE_URL` env var (set this in Vercel if you ever want a
 *      custom domain to win over the auto-detected one).
 *   2. The host of the incoming request — so the correct URL is used on
 *      preview, production and custom domains without any code change.
 *   3. A localhost fallback for local development.
 *
 * This means the canonical URL, sitemap and robots.txt are always correct,
 * with nothing to update after deploying.
 */
export function resolveSiteUrl(requestHost?: string | null): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  const host =
    requestHost ??
    (typeof window !== "undefined" ? window.location.host : undefined);

  if (host && host !== "localhost:3000" && !host.startsWith("localhost:")) {
    return `https://${host}`;
  }

  return "http://localhost:3000";
}

export const site = {
  name: "Jahid Hasan",
  title: "Jahid Hasan | Backend Engineer",
  description:
    "Backend engineer building event-driven microservices with Spring Boot, Kafka and Redis. ICPC finalist and Codeforces Expert.",
  /**
   * Leave this empty — `resolveSiteUrl()` detects the live host automatically.
   * Set `NEXT_PUBLIC_SITE_URL` in Vercel to override it.
   */
  url: "",
  locale: "en_US",
  /** Generated at build time by `src/app/opengraph-image.tsx`. */
  ogImage: "/opengraph-image",
  /**
   * Your CV lives in `public/`. Drop the file there and — if you rename it —
   * update this one line. Any filename works; the download buttons in the
   * navbar, hero and footer all read from here.
   */
  cvPath: "/Jahid_Hasan_CV.pdf",
  initials: "JH",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

export const hero = {
  greeting: "Hi, I'm",
  name: "Jahid Hasan",
  rotatingRoles: [
    "Backend Engineer",
    "Microservices & Event-Driven Systems",
    "Competitive Programmer",
  ],
  pitch:
    "I build reliable, event-driven backend systems — from Kafka-powered sagas to observability dashboards — and I enjoy solving hard algorithmic problems.",
  profileImage: "/profile.png",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Download CV", href: site.cvPath, download: true },
  stats: [
    { value: "4000+", label: "Problems Solved" },
    { value: "Expert", label: "Codeforces" },
    { value: "Top 2%", label: "ICPC Asia West" },
    { value: "10", label: "Service Microservices Platform" },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  Social links (shared across hero + contact)                               */
/* -------------------------------------------------------------------------- */

export const socials = [
  {
    id: "github",
    label: "GitHub",
    handle: "@Md-Jahid-Hasan-10",
    href: "https://github.com/Md-Jahid-Hasan-10",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "in/jahid-hasan-jhs",
    href: "https://linkedin.com/in/jahid-hasan-jhs",
  },
  {
    id: "codeforces",
    label: "Codeforces",
    handle: "Jahid__Noob",
    href: "https://codeforces.com/profile/Jahid__Noob",
  },
  {
    id: "codechef",
    label: "CodeChef",
    handle: "jahid_noob",
    href: "https://www.codechef.com/users/jahid_noob",
  },
] as const;

export const email = "2227jahid@gmail.com";
export const mailtoHref = `mailto:${email}`;

/* -------------------------------------------------------------------------- */
/*  About                                                                     */
/* -------------------------------------------------------------------------- */

export const about = {
  paragraphs: [
    "I'm an ICT undergraduate at Jahangirnagar University, graduating in January 2027, currently working as a Trainee Software Engineer at Brain Station 23 PLC.",
    "I'm passionate about backend architecture — microservices, event-driven design, reliability patterns and observability. The work I'm proudest of is a 10-service banking platform where money transfers run as sagas with automatic compensation, backed by idempotent consumers, transactional outbox and a full OpenTelemetry → Prometheus → Grafana stack.",
    "Competitive programming is the other half of how I think: 4000+ problems solved, Codeforces Expert, and ICPC Asia West top 2%. I also train students through the UFTB Programming Club and the Programming Club at University of Asia Pacific.",
  ],
  facts: [
    { label: "Location", value: "Dhaka, Bangladesh" },
    { label: "Education", value: "B.Sc. ICT, Jahangirnagar University" },
    { label: "Current role", value: "Trainee Software Engineer" },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  Experience                                                                */
/* -------------------------------------------------------------------------- */

export type ExperienceEntry = {
  title: string;
  organization: string;
  period: string;
  description?: string;
  current?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    title: "Trainee Software Engineer",
    organization: "Brain Station 23 PLC",
    period: "October 2026 – Present",
    current: true,
  },
  {
    title: "Competitive Programming Trainer",
    organization: "UFTB Programming Club",
    period: "May 2026 – Aug 2026",
    description: "Trained students in competitive programming.",
  },
  {
    title: "Competitive Programming Bootcamp Trainer",
    organization: "Programming Club, University of Asia Pacific",
    period: "November 2025",
    description: "Trained students in competitive programming.",
  },
  {
    title: "Logistics Team Head",
    organization: "CP Community, IIT, Jahangirnagar University",
    period: "June 2025 – Present",
    current: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                  */
/* -------------------------------------------------------------------------- */

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  description?: string;
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  /** Renders the interactive SVG architecture diagram instead of an image. */
  diagram?: boolean;
  /** Placeholder art used when no screenshot exists. */
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    id: "banking-microservices",
    title: "Event-Driven Banking Microservices",
    summary:
      "A 10-service banking platform where transfers run as sagas with automatic reversal, transactional outbox and full distributed observability.",
    description:
      "Designed and built a distributed banking backend on Spring Boot, Spring Cloud and Kafka — with money movement modelled as a saga that compensates itself on failure, idempotent consumers protecting the ledger, and an observability stack spanning OpenTelemetry, Prometheus, Loki and Grafana.",
    stack: [
      "Spring Boot",
      "Spring Cloud",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "Resilience4j",
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "Loki",
      "Docker Compose",
      "Next.js",
      "JWT",
    ],
    highlights: [
      "Built a 10-service banking platform with Spring Boot, Spring Cloud and Apache Kafka; money transfers run as a saga with automatic reversal, timeouts and a transactional outbox.",
      "Reliability: idempotent consumers, event-id deduplication, dead-letter topics, Resilience4j circuit breakers; validated with 14 failure drills and ledger integrity checks.",
      "Security: Redis-backed OTP service (hashed codes, TTL, atomic Lua verification, resend cooldown), AES-GCM encrypted events, JWT validation at the API gateway.",
      "Observability: AOP request/response logging, OpenTelemetry tracing, Prometheus, Loki, 7 Grafana dashboards, 20 alert rules.",
      "Team of 2; I owned 6 of 11 repositories (gateway, user, OTP, notification, event bus, UI).",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Md-Jahid-Hasan-10/banking-microservices",
      },
    ],
    // TODO: add a platform screenshot at /projects/banking-microservices.png
    image: undefined,
    diagram: true,
    featured: true,
  },
  {
    id: "foodio",
    title: "Foodio",
    summary:
      "A food ordering web application with menu browsing, cart and order management, live delivery estimates and free-delivery offers.",
    description:
      "Foodio is a food-focused web app that walks a customer from browsing the menu to placing an order — with cart state, a sign-in flow, order history and delivery-time estimates surfaced on the landing page.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "MongoDB",
      "Vercel",
    ],
    highlights: [
      "Landing experience with menu browsing, cart with live item count, and a dedicated food menu and my-orders flow.",
      "Order management with sign-in protected customer accounts and order history.",
      "Delivery UX surfaceing free-delivery offers and an average delivery-time estimate.",
      "Deployed on Vercel with a production build and a responsive layout.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Md-Jahid-Hasan-10/Foodio" },
      { label: "Live Demo", href: "https://foodio-umdh.vercel.app/" },
    ],
    image: "/projects/foodio.png",
    imageAlt: "Foodio landing page showing a food ordering service with menu navigation, cart and delivery information",
  },
  {
    id: "digitvision",
    title: "DigitVision: Real-Time Handwritten Digit Classifier",
    summary:
      "A convolutional neural network that classifies handwritten digits in real time through an interactive web app.",
    description:
      "DigitVision pairs a CNN trained on handwritten digit images with a web interface that accepts an uploaded digit and returns the model's prediction almost instantly.",
    stack: [
      "Python",
      "CNN",
      "Deep Learning",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Web App",
    ],
    highlights: [
      "Real-time handwritten digit classifier built on Convolutional Neural Networks.",
      "Interactive web app where users upload a digit image and get an instant prediction.",
      "Model training and evaluation performed in Python with NumPy, Pandas and Matplotlib.",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://digitvision-real-time-handwritten-digit.onrender.com/",
      },
      {
        label: "GitHub",
        href: "https://github.com/Md-Jahid-Hasan-10/Artificial-Intelligence/blob/main/Deep%20Learning/CNN/Number_Prediction_Using_CNN.ipynb",
      },
    ],
    image: "/projects/digitvision.png",
    imageAlt: "DigitVision web interface with a digit image upload area and a classify button",
  },
];

/* -------------------------------------------------------------------------- */
/*  Skills                                                                    */
/* -------------------------------------------------------------------------- */

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      "Java",
      "C",
      "C++",
      "JavaScript",
      "Python",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend & Architecture",
    items: [
      "Spring Boot",
      "Spring Cloud",
      "REST APIs",
      "JWT",
      "FastAPI",
      "Microservices",
      "Event-Driven Architecture",
      "Saga",
      "Transactional Outbox",
    ],
  },
  {
    title: "Messaging, Data & Observability",
    items: [
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "Resilience4j",
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "Loki",
      "Tempo",
    ],
  },
  {
    title: "Frontend & Tools",
    items: [
      "Next.js",
      "React",
      "Docker (Compose)",
      "Maven",
      "Git / GitHub",
      "Postman",
      "Linux (CLI)",
    ],
  },
  {
    title: "Machine & Deep Learning",
    items: [
      "Supervised Learning",
      "Classification",
      "CNN",
      "ANN / MLP",
      "NLP",
      "Data Preprocessing",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "NLTK",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Achievements                                                              */
/* -------------------------------------------------------------------------- */

export type Counter = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
};

export const counters: Counter[] = [
  { value: 4000, suffix: "+", label: "Problems Solved" },
  { value: 15, suffix: "+", label: "IUPC / ICPC Onsite Contests" },
  { value: 1617, label: "Codeforces Max Rating", sublabel: "Expert" },
  { value: 1801, label: "CodeChef Rating", sublabel: "4-star, top 5%" },
];

export type Achievement = {
  title: string;
  detail: string;
  highlight?: string;
};

export const achievements: Achievement[] = [
  {
    title: "ICPC Asia West Continental 2025–26",
    detail: "44th overall · 9th in Bangladesh",
    highlight: "Top 2%",
  },
  {
    title: "ICPC Asia Dhaka Regional 2025",
    detail: "Team JU_Jabian_6.1",
    highlight: "8th place",
  },
  {
    title: "NSU IUPC 2026",
    detail: "Team JU_Kamikaze",
    highlight: "8th place",
  },
  {
    title: "Codeforces",
    detail: "Handle: Jahid__Noob",
    highlight: "Expert · 1617",
  },
  {
    title: "CodeChef",
    detail: "Handle: jahid_noob",
    highlight: "4-star · 1801",
  },
];

/* -------------------------------------------------------------------------- */
/*  Education                                                                 */
/* -------------------------------------------------------------------------- */

export const education = {
  institution: "Jahangirnagar University",
  location: "Savar, Dhaka",
  degree: "B.Sc. in Information and Communication Technology",
  period: "February 2023 – January 2027 (expected)",
  cgpa: "CGPA 3.75 (up to 6th semester)",
} as const;

/* -------------------------------------------------------------------------- */
/*  Contact                                                                   */
/* -------------------------------------------------------------------------- */

export const contact = {
  heading: "Let's work together",
  invite:
    "I'm open to backend and software engineering roles where distributed systems, event-driven design and reliability matter. If you're building something at that scale, I'd love to hear about it.",
} as const;

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

export const footer = {
  builtWith: "Built with Next.js, Tailwind CSS & Framer Motion",
  year: 2026,
} as const;
