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

/** Salvaguarda: só indexa quando a clínica aprovar. */
const indexavel = process.env.SITE_INDEXAVEL === "1";

const description =
  "Clínica de medicina estética e cirurgia plástica em Rio Tinto, Porto. Protocolos personalizados de medicina estética, tecnologia e acompanhamento clínico, com avaliação antes de qualquer tratamento.";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} — Clínica de Estética Avançada em ${brand.city}`,
    template: `%s · ${brand.name}`,
  },
  description,
  keywords: [
    "clínica de medicina estética",
    "cirurgia plástica Porto",
    "medicina estética Rio Tinto",
    "estética avançada Porto",
    "Morpheus8",
    "HIFU",
    "IPL",
    "depilação a laser",
    "preenchimentos",
    "toxina botulínica",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_PT",
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
  // Enquanto for uma proposta por aprovar, não pode ser indexada: traz o
  // nome, a morada, o telefone e a direção clínica reais, e apareceria no
  // Google a competir com o site oficial da clínica.
  // Ligar só depois do OK da cliente: SITE_INDEXAVEL=1
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
  telephone: `+351${brand.phone.replace(/\s/g, "")}`,
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
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:30",
      closes: "14:30",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">
        <a
          href="#introducao"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-bordo focus:px-5 focus:py-3 focus:text-fundo"
        >
          Saltar para o conteúdo
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
