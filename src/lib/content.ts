/**
 * Every string on the site lives in this one file, so the whole brand can be
 * rewritten without opening a component.
 *
 * ONDELLE AESTHETICS IS A FICTIONAL BRAND. It was created as a portfolio
 * demonstration of a premium med spa website. The clinic, the medical
 * director, the address and the phone number do not exist. The phone number
 * uses the 555-01xx range reserved for fiction in North America, so it can
 * never reach a real person, and the address is a neighbourhood rather than
 * a building, so no real business or resident sits at it.
 *
 * Nothing here is inherited from a real client. Every name, credential and
 * contact detail from the original build was removed.
 */

/**
 * Photography and video: `null` is a legitimate state, not an oversight.
 *
 * While it is `null`, the frame draws a gradient with the correct crop and
 * aspect ratio. To drop in a real file, put the path from `public/` here —
 * see `IMAGENS-A-GERAR.md` at the root for the shot list and the exact
 * dimensions each slot needs.
 */
type Media = string | null;

const semMedia: Media = null;

export const brand = {
  name: "ONDELLE",
  full: "Ondelle Aesthetics",
  tagline: "Advanced aesthetics. Naturally you.",
  city: "Miami",
  url: "https://ondelle-aesthetics.vercel.app",
  email: "hello@ondelleaesthetics.com",
  // The 555-0100..0199 block is reserved for fictional use, so this can never
  // ring a real person. Do not swap in a working number unless somebody is
  // actually there to answer it.
  phone: "(305) 555-0142",
  phoneNote: "Call · Text",
  // No WhatsApp: US med spas book by phone or web form, not WhatsApp. That
  // was a Portuguese market convention from the original build.
  booking: "tel:+13055550142",
  instagram: { handle: "@ondelleaesthetics", url: "#" },
  address: {
    // Neighbourhood, deliberately without a street number. A fictional
    // business sitting on a real address becomes somebody else's problem.
    street: "Miami Design District",
    postal: "FL 33137",
    city: "Miami",
    country: "US",
  },
  hours: [
    { dias: "Monday to Friday", horas: "9:00 AM — 7:00 PM" },
    { dias: "Saturday", horas: "10:00 AM — 4:00 PM" },
    { dias: "Sunday", horas: "Closed" },
  ],
} as const;

/** Section numbering — feeds the fixed counter. */
export const sectionIds = [
  "inicio",
  "introducao",
  "filosofia",
  "direcao-clinica",
  "medicina-estetica",
  "tecnologia",
  "rosto",
  "corpo",
  "pele",
  "rituais",
  "experiencia",
  "protocolos",
  "resultados",
  "marcar",
  "contactos",
] as const;

export type SectionId = (typeof sectionIds)[number];

export const counterLabels = [
  "Start",
  "Introduction",
  "Philosophy",
  "Medical Direction",
  "Injectables",
  "Technology",
  "Face",
  "Body",
  "Skin",
  "Rituals",
  "Experience",
  "Treatment Plans",
  "Results",
  "Book",
  "Contact",
];

export const nav = [
  { label: "Home", href: "#inicio" },
  { label: "About", href: "#filosofia" },
  { label: "Treatments", href: "#medicina-estetica" },
  { label: "Technology", href: "#tecnologia" },
  { label: "Experience", href: "#experiencia" },
  { label: "Contact", href: "#contactos" },
] as const;

export const ctaLabel = "Book a Consultation";

// ── 00 · Opening ─────────────────────────────────────────────────────────
/**
 * The wordmark that rises inside the portal during the intro.
 *
 * `null` until an ONDELLE wordmark exists. The original file was the real
 * clinic's logo and could not travel into a demonstration brand.
 */
export const abertura = {
} as const;

// ── 01 · Hero ────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Miami · Advanced Aesthetics",
  title: "Advanced aesthetics.\nResults that still look like you.",
  lead: "At Ondelle, treatment begins long before the first appointment. It begins with assessment, with listening, and with understanding your face, your body and what you actually want.",
  note: "Personalized treatment plans. Advanced technology. Physician-led care.",
  cta: "Book a Consultation",
  // Generated ambient gradient, not footage. It is a stand-in that reads as
  // a deliberate dark opening rather than a missing file, and it carries no
  // people, no premises and no claim.
  video: "/imagens/video/ambient-hero.mp4",
  videoMobile: "/imagens/video/ambient-hero-vertical.mp4",
} as const;

// ── 02 · Introduction ────────────────────────────────────────────────────
export const intro = {
  label: "About Ondelle",
  title: "Your face does not need to be transformed.\nIt needs to be understood.",
  body: [
    "At Ondelle, we believe in aesthetics that respect who you already are.",
  ],
  close: "Because real luxury is not looking like someone else. It is feeling more like yourself.",
  imagem: semMedia,
  alt: "",
} as const;

// ── 03 · Philosophy ──────────────────────────────────────────────────────
export const filosofia = {
  label: "Philosophy",
  title: "Less excess.\nMore precision.",
  items: [
    { n: "01", title: "The assessment" },
    { n: "02", title: "The technique" },
    { n: "03", title: "The technology" },
    { n: "04", title: "The treatment plan" },
    { n: "05", title: "The follow-up" },
  ],
  body: "Every treatment at Ondelle is planned individually, around your anatomy, your concerns and the outcome you are looking for.",
  close: "Our commitment is simple: enhance, without erasing.",
} as const;

// ── 04 · Medical direction ───────────────────────────────────────────────
export const direcaoClinica = {
  label: "Medical Direction",
  title: "Clinical experience.\nAn individual eye.",
  body: "Ondelle is a physician-led practice. Every treatment plan is designed under medical direction and performed by licensed providers, with technical precision and a patient-centered approach.",
  purpose: "Every decision is made with one purpose:",
  close: "to respect your anatomy, to honor what makes you distinctive, and to pursue results that read as natural.",
  // Fictional, like the clinic. See the notice at the top of this file and
  // the one rendered in the footer.
  person: { name: "Dr. Camille Roux, MD", role: "Medical Director" },
  /**
   * The frame rotates between these portraits and the caption follows what
   * is on screen. The original build used photographs of a real clinician
   * and a real team, and none of that could travel into a demonstration
   * brand. These replacements are generated for Ondelle — the wordmark is on
   * the wall and on every coat, and the window shows Miami.
   *
   * The second portrait was cut out of a full page mockup — the file as
   * downloaded had a navigation bar, a headline and a strip of icons sitting
   * on top of the photograph. Cropping was the way to honour what this slot
   * needs: the same face as the first, seen differently.
   */
  retratos: [
    {
      src: "/imagens/equipa/direcao-01.png",
      alt: "Medical Director, Ondelle Aesthetics",
      nome: "Dr. Camille Roux, MD",
      papel: "Medical Director",
      bio: "Board-certified in aesthetic medicine, with a practice built around restraint. The work he is known for is the work you cannot point to — the result that reads as rest rather than as treatment.",
    },
    {
      // Recortado da maqueta de página que ela gerou: o ficheiro original
      // trazia barra de navegação, título e faixa de ícones por cima da
      // fotografia. Cortado em y 100..1090 de 1672, fica só o médico —
      // mesma cara do primeiro retrato, que é o que este lugar exige.
      src: "/imagens/equipa/direcao-02.png",
      alt: "Medical Director, Ondelle Aesthetics",
      nome: "Dr. Camille Roux, MD",
      papel: "Medical Director",
    },
    {
      // A equipa SAIU daqui a pedido dela. O ficheiro é 1448x1086 — 4:3
      // deitado — e esta moldura é 4:5 de pé: entrava cortada pelos lados,
      // com as pessoas das pontas pelo meio. Foi para a moldura 4:3 da
      // Filosofia, que tem exatamente a proporção dela.
      //
      // `RetratoRotativo` filtra por `src !== null`, por isso deixá-la a
      // `semMedia` basta para sair da rotação — não fica um lugar vazio a
      // desenhar gradiente de três em três segundos.
      src: semMedia,
      alt: "The Ondelle team",
      nome: "The Ondelle Team",
    },
  ],
  imagem: semMedia,
  alt: "",
} as const;

export const espaco = {
  label: "The Space",
  intro: "A medical aesthetics practice in the Miami Design District.",
  title: "A space built around you.",
  body: [
    "A space designed for people who want to look like a rested version of themselves, not a different person.",
    "You will find advanced, individually planned treatments here, delivered by licensed providers in a calm and modern setting.",
    "Our work is to help you reach your aesthetic goals safely, attentively and competently.",
  ],
  close: "Every detail was considered to make the visit itself worth having, with your comfort first.",
} as const;

// ── 05 · Injectables ─────────────────────────────────────────────────────
export const medicinaEstetica = {
  id: "medicina-estetica",
  label: "Injectables",
  title: "The art of precision",
  intro: [
    "Injectable treatment takes more than technique.",
    "It takes anatomy, proportion and judgment.",
  ],
  cta: "Explore injectables",
  items: [
    {
      n: "01",
      title: "Neuromodulators",
      body: "Personalized plans to soften expression lines while keeping facial movement and expression intact.",
      imagem: "/imagens/protocolos/protocolos-toxina-botulinica.jpg.jpg",
      alt: "Neuromodulator treatment",
    },
    {
      n: "02",
      title: "Dermal Fillers",
      body: "Volume restoration and facial balancing through an individualized approach that respects your anatomy.",
      imagem: "/imagens/protocolos/protocolos-preenchimentos.jpg.jpg",
      alt: "Dermal filler treatment",
    },
    {
      n: "03",
      title: "Hyperhidrosis Treatment",
      body: "Neuromodulator treatment of the underarm area to reduce excessive sweating, following consultation.",
      imagem: "/imagens/protocolos/hyperhidrosis.png",
      alt: "Underarm treatment session for excessive sweating",
    },
  ],
} as const;

// ── 06 · Technology ──────────────────────────────────────────────────────
export const tecnologia = {
  id: "tecnologia",
  label: "Technology",
  title: "Technology that works for your skin.",
  intro: [
    "Innovation only matters when it is applied with intent.",
    "At Ondelle, technology and clinical judgment meet to build plans around what your skin actually needs.",
  ],
  kinetic: "Technology. Precision. Personalization.",
  items: [
    {
      n: "01",
      title: "RF Microneedling",
      body: "Radiofrequency microneedling used in personalized skin treatment plans, including approaches for the delicate eye area.",
      imagem: "/imagens/protocolos/protocolos-morpheus8.jpg.jpg",
      alt: "Radiofrequency microneedling session",
    },
    {
      n: "02",
      title: "Ultrasound Lifting",
      body: "High-intensity focused ultrasound used in plans aimed at firmness and definition.",
      imagem: "/imagens/protocolos/protocolos-hifu.jpg.jpg",
      alt: "Focused ultrasound session",
    },
    {
      n: "03",
      title: "IPL Photofacial",
      body: "Intense pulsed light integrated into personalized facial and body treatment plans.",
      imagem: "/imagens/protocolos/protocolos-ipl-pele.jpg.png",
      alt: "Intense pulsed light session",
    },
    {
      n: "04",
      title: "Laser Treatments",
      body: "Laser technology applied across hair reduction and resurfacing plans, adapted to each area and skin type.",
      imagem: "/imagens/protocolos/protocolos-laser.jpg.png",
      alt: "Laser treatment session",
    },
  ],
} as const;

// ── 07 · Face ────────────────────────────────────────────────────────────
export const rosto = {
  label: "Face",
  title: "Your face.\nYour identity.",
  kicker: "Beauty lives in balance.",
  body: [
    "Our facial plans are built to care for, improve and honor — without erasing what makes a face recognizable as yours.",
    "From injectables to advanced devices, every treatment is decided one patient at a time.",
  ],
  close: "Natural results start with personalized decisions.",
  imagem: "/imagens/destaque/rosto-principal.png",
  alt: "A face at rest, eyes closed, framed by pale petals",
} as const;

// ── 08 · Body ────────────────────────────────────────────────────────────
export const corpo = {
  id: "corpo",
  label: "Body",
  title: "Caring for your body is caring for yourself.",
  intro: ["Body treatment plans designed around different needs, goals and stages."],
  cta: "Explore body treatments",
  items: [
    {
      n: "01",
      title: "Lymphatic Drainage",
      body: "A wellness-led approach to circulation, recovery and a feeling of lightness.",
      imagem: "/imagens/protocolos/protocolos-drenagem-linfatica.jpg.jpg",
      alt: "Manual lymphatic drainage",
    },
    {
      n: "02",
      title: "Body Contouring",
      body: "Non-surgical contouring plans focused on shape, firmness and definition.",
      imagem: "/imagens/protocolos/protocolosdrenomodeladora.jpg.png",
      alt: "Body contouring treatment",
    },
    {
      n: "03",
      title: "Laser Hair Removal",
      body: "Advanced laser technology for personalized hair reduction plans across different areas of the body.",
      imagem: "/imagens/protocolos/protocolos-depilacao-laser.jpg.jpg",
      alt: "Laser hair removal session",
    },
    {
      n: "04",
      title: "Medical Weight Loss",
      body: "Physician-supervised weight management, built around your medical history and reviewed at every stage. Eligibility is determined at consultation.",
      imagem: "/imagens/protocolos/medical-weight-loss.jpg",
      alt: "Body measurement during a weight management plan",
    },
    {
      n: "05",
      title: "Skin Tightening",
      body: "Energy-based plans that address skin laxity, delivered as a course of sessions following assessment.",
      imagem: "/imagens/protocolos/skin-tightening.jpg",
      alt: "Body profile illustrating skin firmness",
    },
  ],
} as const;

// ── 09 · Skin ────────────────────────────────────────────────────────────
export const pele = {
  id: "pele",
  label: "Skin",
  title: "Well-cared-for skin does not need a filter.",
  intro: [
    "Skin changes. Needs change. The plan should change with them.",
    "At Ondelle, we assess your skin before we decide anything about it.",
  ],
  items: [
    {
      n: "01",
      title: "Signature Facial",
      body: "Deep cleansing and resurfacing to clarify, renew and revitalize the skin.",
      imagem: "/imagens/protocolos/protocolos-limpeza-pele-profunda.jpg.jpg",
      alt: "Deep cleansing facial",
    },
    {
      n: "02",
      title: "IPL Photofacial",
      body: "Personalized intense pulsed light plans for tone, texture and pigmentation concerns.",
      imagem: "/imagens/protocolos/protocolos-ipl-pele.jpg.png",
      alt: "Intense pulsed light applied to the skin",
    },
    {
      n: "03",
      title: "Hydration Therapy",
      body: "Targeted treatment to restore comfort, luminosity and a healthy look to the skin.",
      imagem: "/imagens/protocolos/protocolos-hidratacao.jpg.jpg",
      alt: "Facial hydration treatment",
    },
  ],
} as const;

// ── 10 · Rituals ─────────────────────────────────────────────────────────
export const rituais = {
  id: "rituais",
  label: "Rituals",
  title: "The small details are part of the experience too.",
  intro: ["The Ondelle experience extends beyond the treatment room."],
  kinetic: "Beauty, from the big results to the small details.",
  items: [
    {
      n: "01",
      title: "Lip Hydration",
      body: "Hydration and conditioning for the lips.",
      imagem: "/imagens/protocolos/lip-hydration.jpg",
      alt: "Close-up of lips after a hydrating gloss treatment",
    },
    {
      n: "02",
      title: "Hair Restoration",
      body: "Scalp and hair treatment plans adjusted to each case.",
      imagem: "/imagens/protocolos/hair-restoration.jpg",
      alt: "Scalp treatment session for hair restoration",
    },
    {
      n: "03",
      title: "Massage",
      body: "Time to slow down, with technique adapted to what the body is asking for.",
      imagem: "/imagens/protocolos/massage.png",
      alt: "Hands performing a body massage on a treatment bed",
    },
  ],
} as const;

// ── 11 · Experience ──────────────────────────────────────────────────────
export const experiencia = {
  label: "Experience",
  title: "Come in. Slow down.\nBe taken care of.",
  body: ["Ondelle was designed so that every visit is more than a treatment."],
  beats: ["A moment to stop.", "To be cared for.", "To trust.", "To leave feeling more like yourself."],
  close: "A space where technology and care meet an experience that is genuinely personal.",
  imagem: semMedia,
  alt: "",
} as const;

// ── 12 · Personalized plans ──────────────────────────────────────────────
export const protocolos = {
  label: "Personalized Plans",
  title: "No two treatment plans are the same.",
  beats: ["So we start by listening.", "Then we assess.", "Only then do we decide."],
  body: "Every Ondelle plan is built around your individual anatomy, your concerns and the outcome you are looking for.",
  close: "Personalization is not a detail. It is the starting point.",
  /** Discover -> Assess -> Personalize -> Treat -> Follow up */
  jornada: ["Discover", "Assess", "Personalize", "Treat", "Follow Up"],
} as const;

// ── 13 · Natural results ─────────────────────────────────────────────────
export const resultados = {
  label: "Natural Results",
  title: "The best version of you.\nStill unmistakably you.",
  pares: [
    { nao: "We do not chase a standard.", sim: "We look for balance." },
    { nao: "We do not set out to transform.", sim: "We set out to enhance." },
    { nao: "We do not do excess.", sim: "We do precision." },
  ],
  close: "Ondelle is advanced aesthetics with a natural view of beauty.",
} as const;

// ── 14 · Primary CTA ─────────────────────────────────────────────────────
export const cta = {
  label: "Book",
  title: "It is time\nto take care of you.",
  body: "Find the right plan for you through a personalized consultation.",
  primary: "Book a Consultation",
  secondary: "Call the Clinic",
  note: "Ondelle Aesthetics · Miami",
} as const;

// ── 15 · Contact ─────────────────────────────────────────────────────────
export const contactos = {
  label: "Contact",
  title: "Ondelle Aesthetics",
  subtitle: "Advanced Aesthetic Medicine",
} as const;

// ── 16 · Cinematic closing CTA ───────────────────────────────────────────
export const fecho = {
  title: "Your beauty.\nOur care.",
  body: "A personalized advanced aesthetics experience, built around you.",
  cta: "Book your consultation",
  imagem: semMedia, // full-bleed · 16:9+
  alt: "",
} as const;

/** Short lines for the kinetic type between sections. */
export const frases = [
  "Beauty lives in balance.",
  "Precision in every detail.",
  "Technology. Knowledge. Care.",
  "Plans built around you.",
  "Naturally extraordinary.",
  "Your identity. Our priority.",
  "Where science meets beauty.",
  "Less excess. More precision.",
  "The luxury of being cared for.",
  "Advanced aesthetics. Naturally you.",
] as const;

export const footer = {
  /**
   * This replaces the real clinic's health-authority registration numbers,
   * which were removed along with everything else that identified them. It
   * is the disclosure, and it is deliberately the most prominent line here.
   */
  registos: "Fictional brand — created as a website design demonstration. Ondelle Aesthetics is not a real clinic and does not provide medical services.",
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
} as const;
