/**
 * Todo o texto do site num só ficheiro, para ser reescrito sem tocar em
 * componentes.
 *
 * Copy base, herdada do projeto da Sofia Sales. Trocar os nomes da clinica ao longo do ficheiro antes de mostrar. Direção clínica e contactos são
 * reais — confirmar antes de publicar.
 */

/**
 * Fotografia e vídeo: `null` é um estado legítimo, não um esquecimento.
 *
 * Enquanto for `null`, a moldura desenha um gradiente com o enquadramento e a
 * proporção certos. Para colocar o ficheiro real, ponha aqui o caminho a
 * partir de `public/` — ver `public/imagens/README.md`.
 */
type Media = string | null;

const semMedia: Media = null;

export const brand = {
  name: "SOFIA SALES",
  full: "Sofia Sales Clinic",
  tagline: "Beleza avançada. Resultados naturais.",
  city: "Rio Tinto",
  // Sem domínio próprio: o site vive no endereço da Vercel. O email é o
  // Gmail real da clínica — quando houver domínio, passa a geral@dominio e
  // este fica a reencaminhar.
  url: "https://sofia-sales-clinic.vercel.app",
  email: "sofiasalesclinic@gmail.com",
  phone: "935 751 928",
  phoneNote: "Telefone · WhatsApp",
  whatsapp: "https://wa.me/351935751928",
  instagram: { handle: "@sofiasales_clinic", url: "https://instagram.com/sofiasales_clinic" },
  address: {
    street: "Rua Dr. José Luís de Araújo, 69",
    postal: "4435-154",
    city: "Rio Tinto",
    country: "PT",
  },
  hours: [
    { dias: "Terça a sexta", horas: "09:30 — 19:30" },
    { dias: "Sábado", horas: "09:30 — 14:30" },
    { dias: "Domingo e segunda", horas: "Encerrado" },
  ],
} as const;

/** Numeração das secções — alimenta o contador fixo. */
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
  "Início",
  "Introdução",
  "Filosofia",
  "Direção clínica",
  "Medicina estética",
  "Tecnologia",
  "Rosto",
  "Corpo",
  "Pele",
  "Rituais",
  "Experiência",
  "Protocolos",
  "Resultados",
  "Marcar",
  "Contactos",
];

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "A Sofia Sales", href: "#filosofia" },
  { label: "Tratamentos", href: "#medicina-estetica" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contactos", href: "#contactos" },
] as const;

export const ctaLabel = "Marcar consulta";

// ── 00 · Abertura ────────────────────────────────────────────────────────
/**
 * O logótipo do portal — **imagem, já não vídeo**.
 *
 * O `videoinicio.mp4` saiu da abertura. Trazia um foco de luz no fundo
 * (canal verde de 26 nos cantos a 67 no topo-centro, contra 50 do site) que
 * se lia como uma mancha sobre o bordo, e nenhuma das cinco tentativas de o
 * domar resultou: cor chapada no portal, remoção do fundo por `lighten`,
 * cópia desfocada a cobrir, faixas com a linha de bordo, e um véu em
 * degradê. A última ainda deixava a mancha à vista.
 *
 * O PNG não tem fundo — logo não há mancha possível. É o mesmo logótipo,
 * reduzido a 512×512 e convertido: 59 KB. À largura a que é desenhado
 * (~77% da largura do vão) sobra resolução mesmo em ecrã de dupla
 * densidade.
 *
 * O ficheiro de vídeo fica em `public` caso um dia volte a ser preciso.
 */
export const abertura = {
  logo: "/imagens/equipa/logoefavicon.jpg.png",
} as const;

// ── 01 · Hero ────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Rio Tinto · Estética Avançada",
  title: "Beleza avançada.\nResultados que continuam a ser seus.",
  lead: "Na Sofia Sales, a estética começa antes do tratamento. Começa na avaliação, na escuta e na compreensão de cada rosto, cada corpo e cada objetivo.",
  note: "Protocolos personalizados. Tecnologia avançada. Acompanhamento clínico.",
  cta: "Marcar consulta",
  // Trocado por ela: o `videosite.mp4` era o da clínica de origem (hélice de
  // ADN e malha sobre um rosto). Este é o dela. 1280×720, 6 s.
  video: "/imagens/video/videocapa.mp4.mp4",
  /**
   * Versão vertical (720×1280), só para telemóvel. Recortada do `videocapa`
   * pelo centro — o rosto está centrado no plano, por isso o corte não perde
   * nada. O `videocelular.mp4` que aqui estava era da clínica de origem e
   * ficava a aparecer a quem abrisse no telemóvel.
   */
  videoMobile: "/imagens/video/videocapa-vertical.mp4",
} as const;

// ── 02 · Introdução ──────────────────────────────────────────────────────
export const intro = {
  label: "A Sofia Sales",
  title: "A sua beleza não precisa de ser transformada.\nPrecisa de ser compreendida.",
  body: [
    // O segundo parágrafo saiu: aquele espaço é agora da fotografia da
    // modelo, que ocupa dali até ao fim do painel branco (ver `page.tsx`).
    "Na Sofia Sales, acreditamos numa estética que respeita a identidade de cada pessoa.",
  ],
  close: "Porque o verdadeiro luxo não está em parecer diferente. Está em sentir-se ainda mais você.",
  imagem: semMedia,
  alt: "",
} as const;

// ── 03 · Filosofia ───────────────────────────────────────────────────────
export const filosofia = {
  label: "Filosofia",
  title: "Menos excesso.\nMais precisão.",
  items: [
    { n: "01", title: "A avaliação" },
    { n: "02", title: "A técnica" },
    { n: "03", title: "A tecnologia" },
    { n: "04", title: "A escolha do protocolo" },
    { n: "05", title: "O acompanhamento" },
  ],
  body: "Na Sofia Sales, cada tratamento é pensado de forma individualizada, tendo em conta as características, necessidades e objetivos de cada paciente.",
  close: "O nosso compromisso é simples: elevar, sem descaracterizar.",
} as const;

// ── 04 · Direção clínica ─────────────────────────────────────────────────
export const direcaoClinica = {
  label: "Direção clínica",
  title: "Experiência clínica.\nOlhar individual.",
  body: "Sob a direção da Dra. Sofia Sales, farmacêutica e mesoterapeuta, a Sofia Sales Clinic desenvolve protocolos personalizados de medicina estética, executados por profissionais qualificados em cada área, com precisão técnica e uma abordagem centrada no paciente.",
  purpose: "Cada decisão é tomada com um propósito:",
  close: "respeitar a sua fisionomia, valorizar a sua individualidade e procurar resultados naturais.",
  // O cargo diz a formação real dela. A distinção importa: ela dirige a
  // clínica; os atos médicos são executados por quem tem competência para
  // os praticar. Não é preciosismo — é o que a lei separa.
  person: { name: "Dra. Sofia Sales", role: "Farmacêutica e mesoterapeuta · Direção da clínica" },
  /**
   * A moldura roda entre estes retratos, e a legenda acompanha o que está à
   * vista. A da equipa não leva segunda linha: "Equipa Sofia Sales" já se
   * explica, e um cargo por baixo de um grupo não quer dizer nada.
   *
   * Os nomes dos ficheiros têm espaço e extensão dupla porque foi assim que
   * vieram; o espaço vai codificado no caminho.
   */
  retratos: [
    {
      // Ficheiro grande (1122x1402). Ver nota no preloader.
      src: "/imagens/destaque/capa.jpg.png",
      alt: "Dra. Sofia Sales",
      nome: "Dra. Sofia Sales",
      papel: "Farmacêutica e mesoterapeuta · Direção da clínica",
      // Apresentação tirada da página oficial dela. CONFIRMAR o fecho da
      // segunda frase: no original está uma palavra que não se lê na captura.
      bio: "Farmacêutica e mesoterapeuta, com uma paixão de longa data pelo universo da estética. Desde jovem que se encanta pela capacidade que os tratamentos estéticos têm de realçar a beleza natural e a autoestima.",
    },
    {
      // Ficheiro grande (1085x1450 contra 477x632). Identificado por
      // comparação de pixels: o nome em `destaque/` está desencontrado
      // do de `equipa/` — este `drasofia` é o retrato que aqui era
      // `drasofia1`.
      src: "/imagens/destaque/drasofia.jpg.png",
      alt: "Dra. Sofia Sales",
      nome: "Dra. Sofia Sales",
      papel: "Farmacêutica e mesoterapeuta · Direção da clínica",
    },
    {
      // Terceiro retrato dela, confirmado por ela. Não tem correspondente em
      // baixa resolução no site — é fotografia nova, não uma substituição.
      src: "/imagens/destaque/drasofia1.jpg.png",
      alt: "Dra. Sofia Sales",
      nome: "Dra. Sofia Sales",
      papel: "Farmacêutica e mesoterapeuta · Direção da clínica",
    },
    {
      // Ficheiro grande (1141x1379 contra 528x640).
      src: "/imagens/destaque/equipaclinic.jpg.png",
      alt: "Equipa da Sofia Sales Clinic",
      nome: "Equipa Sofia Sales",
    },
  ],
  imagem: semMedia, // public/imagens/equipa/ — 1:1
  alt: "",
} as const;

/**
 * Texto do espaço, adaptado do anúncio de abertura da página oficial.
 *
 * Duas coisas mudaram de propósito: a redação passou a português europeu
 * ("num ambiente", "os seus objetivos"), e saiu o "abre brevemente" — a
 * clínica já abriu, e um anúncio de abertura num site em funcionamento
 * envelhece mal.
 */
export const espaco = {
  label: "O espaço",
  intro: "Clínica de medicina estética e cirurgia plástica.",
  // Sem quebra escrita à mão: em computador esta frase é UMA linha, e em
  // telemóvel/tablet o `max-w-[14ch]` parte-a exatamente onde o \n a partia
  // (medido: "Um espaço pensado" dá 187px contra 196px de caixa a 390px de
  // ecrã; a palavra seguinte já não cabe). Uma quebra fixa impedia a linha
  // única em computador.
  title: "Um espaço pensado para si.",
  body: [
    "Um espaço pensado especialmente para quem procura realçar a sua beleza de maneira natural e saudável.",
    "Aqui encontra os tratamentos mais inovadores e personalizados, realizados por profissionais altamente qualificados, num ambiente acolhedor e moderno.",
    "A nossa missão é ajudar cada pessoa a atingir os seus objetivos estéticos com segurança, carinho e competência.",
  ],
  close: "Cada detalhe foi pensado para proporcionar uma experiência única, onde o bem-estar está em primeiro lugar.",
} as const;

// ── 05 · Medicina estética ───────────────────────────────────────────────
export const medicinaEstetica = {
  id: "medicina-estetica",
  label: "Medicina estética",
  title: "A arte da precisão",
  intro: [
    "A medicina estética exige mais do que técnica.",
    "Exige conhecimento, proporção e sensibilidade.",
  ],
  cta: "Conhecer medicina estética",
  items: [
    {
      n: "01",
      title: "Toxina Botulínica",
      body: "Protocolos personalizados para suavizar linhas de expressão e preservar a naturalidade dos movimentos e da expressão facial.",
      imagem: "/imagens/protocolos/protocolos-toxina-botulinica.jpg.jpg",
      alt: "Aplicação de toxina botulínica",
    },
    {
      n: "02",
      title: "Preenchimentos",
      body: "Harmonização e reposição de volume através de uma abordagem individualizada, respeitando a anatomia e as características de cada rosto.",
      imagem: "/imagens/protocolos/protocolos-preenchimentos.jpg.jpg",
      alt: "Preenchimento facial com ácido hialurónico",
    },
    {
      n: "03",
      title: "Hiperidrose Axilar",
      body: "Aplicação de toxina botulínica na região axilar para reduzir a transpiração excessiva, mediante avaliação prévia.",
      imagem: "/imagens/destaque/hiperidrose.jpg.png",
      alt: "Tratamento de hiperidrose axilar",
    },
  ],
} as const;

// ── 06 · Tecnologia ──────────────────────────────────────────────────────
export const tecnologia = {
  id: "tecnologia",
  label: "Tecnologia",
  title: "Tecnologia que trabalha a favor da sua pele.",
  intro: [
    "A inovação só faz sentido quando é aplicada com propósito.",
    "Na Sofia Sales, tecnologia e conhecimento clínico encontram-se para criar protocolos adaptados às necessidades de cada paciente.",
  ],
  kinetic: "Tecnologia. Precisão. Personalização.",
  items: [
    {
      n: "01",
      title: "Morpheus8",
      body: "Tecnologia avançada utilizada em protocolos personalizados de tratamento da pele, incluindo abordagens para a zona do contorno dos olhos.",
      imagem: "/imagens/protocolos/protocolos-morpheus8.jpg.jpg",
      alt: "Sessão de Morpheus8",
    },
    {
      n: "02",
      title: "HIFU",
      body: "Ultrassom microfocado de alta intensidade utilizado em protocolos destinados à firmeza e definição.",
      imagem: "/imagens/protocolos/protocolos-hifu.jpg.jpg",
      alt: "Sessão de HIFU",
    },
    {
      n: "03",
      title: "IPL",
      body: "Luz pulsada intensa integrada em protocolos estéticos faciais e corporais personalizados.",
      imagem: "/imagens/protocolos/protocolos-ipl-pele.jpg.png",
      alt: "Sessão de luz intensa pulsada",
    },
    {
      n: "04",
      title: "Laser",
      body: "Tecnologia aplicada em protocolos de depilação, adaptados às diferentes zonas e características de cada pessoa.",
      imagem: "/imagens/protocolos/protocolos-laser.jpg.png",
      alt: "Sessão de laser",
    },
  ],
} as const;

// ── 07 · Rosto ───────────────────────────────────────────────────────────
export const rosto = {
  label: "Rosto",
  title: "O seu rosto.\nA sua identidade.",
  kicker: "A beleza está no equilíbrio.",
  body: [
    "Os nossos protocolos faciais são desenvolvidos para cuidar, melhorar e valorizar — sem apagar aquilo que torna cada rosto único.",
    "Desde procedimentos injetáveis a tecnologias avançadas, cada tratamento é pensado individualmente.",
  ],
  close: "Resultados naturais começam com decisões personalizadas.",
  imagem: "/imagens/destaque/rostorosto-principal.jpg.png",
  alt: "Rosto em repouso, luz natural",
} as const;

// ── 08 · Corpo ───────────────────────────────────────────────────────────
export const corpo = {
  id: "corpo",
  label: "Corpo",
  title: "Cuidar do corpo é também cuidar de si.",
  intro: ["Protocolos corporais desenhados para diferentes necessidades, objetivos e momentos."],
  cta: "Explorar tratamentos",
  items: [
    {
      n: "01",
      title: "Drenagem Linfática",
      body: "Uma abordagem orientada para o bem-estar corporal e a sensação de leveza.",
      imagem: "/imagens/protocolos/protocolos-drenagem-linfatica.jpg.jpg",
      alt: "Drenagem linfática manual",
    },
    {
      n: "02",
      title: "Drenomodeladora",
      body: "Protocolos personalizados com foco no cuidado e modelação corporal.",
      imagem: "/imagens/protocolos/protocolosdrenomodeladora.jpg.png",
      alt: "Massagem drenomodeladora",
    },
    {
      n: "03",
      title: "Depilação a Laser",
      body: "Tecnologia avançada para protocolos personalizados de redução de pelo em diferentes zonas do corpo.",
      imagem: "/imagens/protocolos/protocolos-depilacao-laser.jpg.jpg",
      alt: "Sessão de depilação a laser",
    },
    {
      n: "04",
      title: "Harmonização Glútea",
      body: "Conjunto de procedimentos estéticos minimamente invasivos na região dos glúteos, para melhorar o contorno, o volume, a firmeza e a simetria — sem necessidade de cirurgia plástica.",
      imagem: "/imagens/destaque/harmonizacaogluteo.jpg.jpg",
      alt: "Harmonização glútea",
    },
    {
      n: "05",
      title: "Lipo Química Definitiva",
      body: "Protocolo injetável para redução de gordura localizada, aplicado por sessões e sempre mediante avaliação prévia.",
      // O único dos cinco que é QUADRADO (400x400) e pequeno. A moldura é 4:5,
      // por isso esta sobe para 523px de altura num cartão de computador —
      // 1,3x acima do tamanho real, e mais em ecrã retina. Fica porque é a
      // fotografia dela; se um dia parecer desfocada, é isto e a solução é um
      // ficheiro maior, não código.
      imagem: "/imagens/destaque/lipoquimica.jpg.jpg",
      alt: "Lipo química definitiva",
    },
  ],
} as const;

// ── 09 · Pele ────────────────────────────────────────────────────────────
export const pele = {
  id: "pele",
  label: "Pele",
  title: "Uma pele bem cuidada não precisa de filtros.",
  intro: [
    "A pele muda. As necessidades mudam. O protocolo também deve mudar.",
    "Na Sofia Sales, avaliamos as necessidades da sua pele para criar uma abordagem personalizada.",
  ],
  items: [
    {
      n: "01",
      title: "Limpeza de Pele Profunda",
      body: "Cuidado intensivo para higienizar, renovar e revitalizar a pele.",
      imagem: "/imagens/protocolos/protocolos-limpeza-pele-profunda.jpg.jpg",
      alt: "Limpeza de pele profunda",
    },
    {
      n: "02",
      title: "IPL",
      body: "Protocolos personalizados com luz pulsada intensa para diferentes necessidades estéticas.",
      imagem: "/imagens/protocolos/protocolos-ipl-pele.jpg.png",
      alt: "Luz intensa pulsada aplicada à pele",
    },
    {
      n: "03",
      title: "Hidratação",
      body: "Cuidados direcionados para devolver conforto, luminosidade e aparência saudável à pele.",
      imagem: "/imagens/protocolos/protocolos-hidratacao.jpg.jpg",
      alt: "Protocolo de hidratação facial",
    },
  ],
} as const;

// ── 10 · Rituais de beleza ───────────────────────────────────────────────
export const rituais = {
  id: "rituais",
  label: "Rituais de beleza",
  title: "Os pequenos detalhes também fazem parte da experiência.",
  intro: ["A experiência Sofia Sales estende-se para além da medicina estética."],
  kinetic: "Beleza, dos grandes resultados aos pequenos detalhes.",
  items: [
    {
      n: "01",
      title: "Hidra Gloss",
      body: "Hidratação e cuidado para os lábios.",
      imagem: "/imagens/espaco/espaco-hidra-gloss.jpg.jpg",
      alt: "Ritual Hidra Gloss",
    },
    {
      n: "02",
      title: "Tratamento capilar",
      body: "Cuidado do couro cabeludo e do cabelo, com protocolos ajustados a cada caso.",
      // A clínica não faz unhas — fazia parte da copy herdada, e a fotografia
      // que aqui estava era de outra clínica. Esta é dela.
      imagem: "/imagens/destaque/tratamentocapilar.jpg.jpg",
      alt: "Tratamento capilar",
    },
    {
      n: "03",
      title: "Massagem",
      body: "Momentos de relaxamento e bem-estar, com técnicas adaptadas ao que o corpo pede.",
      // Substituiu "Pestanas & Sobrancelhas", que vinha da copy herdada e não
      // é serviço desta clínica.
      imagem: "/imagens/destaque/massagem.jpg.png",
      alt: "Massagem",
    },
  ],
} as const;

// ── 11 · Experiência ─────────────────────────────────────────────────────
export const experiencia = {
  label: "Experiência",
  title: "Entre. Desacelere.\nCuide de si.",
  body: ["A Sofia Sales foi pensada para que cada visita seja mais do que um tratamento."],
  beats: ["É um momento para parar.", "Para ser cuidada.", "Para confiar.", "Para sair sentindo-se melhor consigo mesma."],
  close: "Um espaço onde tecnologia e cuidado encontram uma experiência verdadeiramente personalizada.",
  imagem: semMedia,
  alt: "",
} as const;

// ── 12 · Protocolos personalizados ───────────────────────────────────────
export const protocolos = {
  label: "Protocolos personalizados",
  title: "Não existe um protocolo igual para todas.",
  beats: ["Por isso, começamos por ouvir.", "Depois avaliamos.", "Só então definimos."],
  body: "Cada protocolo Sofia Sales é construído de acordo com as características individuais, necessidades e objetivos de cada paciente.",
  close: "A personalização não é um detalhe. É o princípio.",
  /** Descobrir → Avaliar → Personalizar → Tratar → Acompanhar */
  jornada: ["Descobrir", "Avaliar", "Personalizar", "Tratar", "Acompanhar"],
} as const;

// ── 13 · Resultados naturais ─────────────────────────────────────────────
export const resultados = {
  label: "Resultados naturais",
  title: "A melhor versão de si.\nSem deixar de ser você.",
  pares: [
    { nao: "Não procuramos padrões.", sim: "Procuramos equilíbrio." },
    { nao: "Não procuramos transformar.", sim: "Procuramos valorizar." },
    { nao: "Não procuramos excessos.", sim: "Procuramos precisão." },
  ],
  close: "Sofia Sales é estética avançada com uma visão natural da beleza.",
} as const;

// ── 14 · CTA principal ───────────────────────────────────────────────────
export const cta = {
  label: "Marcar",
  title: "Está na hora\nde cuidar de si.",
  body: "Descubra o protocolo mais adequado para si através de uma avaliação personalizada.",
  primary: "Marcar consulta",
  secondary: "Falar pelo WhatsApp",
  note: "Sofia Sales Clinic · Rio Tinto",
} as const;

// ── 15 · Contactos ───────────────────────────────────────────────────────
export const contactos = {
  label: "Contactos",
  title: "Sofia Sales Clinic",
  subtitle: "Clínica de Estética Avançada",
} as const;

// ── 16 · CTA final cinematográfico ───────────────────────────────────────
export const fecho = {
  title: "A sua beleza.\nO nosso cuidado.",
  body: "Uma experiência personalizada de estética avançada, pensada para si.",
  cta: "Marque a sua consulta",
  imagem: semMedia, // full-bleed · 16:9+
  alt: "",
} as const;

/** Frases curtas para as linhas cinéticas entre secções. */
export const frases = [
  "A beleza está no equilíbrio.",
  "Precisão em cada detalhe.",
  "Tecnologia. Conhecimento. Cuidado.",
  "Protocolos pensados para si.",
  "Naturalmente extraordinária.",
  "A sua identidade. A nossa prioridade.",
  "Onde a ciência encontra a beleza.",
  "Menos excesso. Mais precisão.",
  "O luxo de ser cuidada.",
  "Beleza avançada. Resultados naturais.",
] as const;

export const footer = {
  /**
   * Dados públicos da clínica, tirados da página oficial dela.
   * CONFIRMAR COM A CLIENTE antes de pôr no ar: um número de registo errado
   * num site de saúde não é uma gralha, é um problema.
   */
  registos: "ERS E180231 · Licença 26560/2025",
  legal: [
    { label: "Política de privacidade", href: "#" },
    { label: "Livro de reclamações", href: "https://www.livroreclamacoes.pt/" },
    { label: "Termos", href: "#" },
  ],
} as const;
