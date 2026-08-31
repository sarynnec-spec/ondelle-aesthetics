import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { SiteHeader } from "@/components/site-header";
import { ProgressCounter } from "@/components/motion/progress-counter";
import { Preloader } from "@/components/motion/preloader";
import { Cursor } from "@/components/motion/cursor";
import { brand, sectionIds, counterLabels } from "@/lib/content";

const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Stays out of search by default, and should stay that way.
 *
 * This is a fictional clinic with structured data that describes a business
 * at a Miami location. Indexed, it would show up in search looking like a
 * real med spa, which is exactly the confusion the whole build is designed
 * to avoid. It is a portfolio piece: it gets visited because somebody was
 * sent the link, not because it ranked.
 */
const indexavel = process.env.SITE_INDEXAVEL === "1";

const description =
  "A fictional med spa website, built as a design demonstration. Advanced aesthetics in Miami: injectables, RF microneedling, laser, body contouring and physician-supervised weight management.";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} — Advanced Aesthetic Medicine in ${brand.city}`,
    template: `%s · ${brand.name}`,
  },
  description,
  keywords: [
    "med spa website template",
    "aesthetic clinic web design",
    "medical spa Miami",
    "RF microneedling",
    "dermal fillers",
    "laser hair removal",
    "body contouring",
    "medical weight loss",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: brand.url,
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description,
  },
  // Leave this off. See the note on `indexavel` above.
  robots: indexavel
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  themeColor: "#3b0112",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: brand.full,
  description,
  url: brand.url,
  telephone: brand.booking.replace("tel:", ""),
  email: brand.email,
  sameAs: [brand.instagram.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address.street,
    postalCode: brand.address.postal,
    addressLocality: brand.address.city,
    addressCountry: brand.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">
        <a
          href="#introducao"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-bordo focus:px-5 focus:py-3 focus:text-fundo"
        >
          Skip to content
        </a>

        <Preloader />
        <Cursor />

        <SmoothScroll>
          {/* Um único canvas para a página inteira, fixo por trás de tudo.
              As secções translúcidas deixam-no ver — é assim que as flores
              existem em todas elas sem multiplicar contextos WebGL. */}

          <SiteHeader />
          <main id="site" className="relative z-10">
            {children}
          </main>
          <ProgressCounter ids={sectionIds} labels={counterLabels} />
        </SmoothScroll>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
