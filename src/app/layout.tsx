import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { email, site, socials } from "@/data/content";
import { isRealLink } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(isRealLink(site.url) ? site.url : "http://localhost:3000"),
  title: site.title,
  description: site.description,
  keywords: [
    "Jahid Hasan",
    "Backend Engineer",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Apache Kafka",
    "Microservices",
    "Event-Driven Architecture",
    "Redis",
    "ICPC",
    "Codeforces Expert",
    "Dhaka Bangladesh",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: isRealLink(site.url) ? site.url : "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: isRealLink(site.url) ? site.url : "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: isRealLink(site.ogImage) ? site.ogImage : "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — Backend Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [isRealLink(site.ogImage) ? site.ogImage : "/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const sameAs = socials
    .map((s) => s.href)
    .filter((href) => isRealLink(href));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Backend Engineer",
    description: site.description,
    url: isRealLink(site.url) ? site.url : undefined,
    email: `mailto:${email}`,
    sameAs,
    knowsAbout: [
      "Backend Engineering",
      "Microservices",
      "Event-Driven Architecture",
      "Apache Kafka",
      "Spring Boot",
      "Redis",
      "Distributed Systems",
      "Competitive Programming",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Jahangirnagar University",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg font-sans text-fg">
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
