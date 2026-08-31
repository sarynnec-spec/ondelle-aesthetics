import Image from "next/image";

import { RevealText, RevealBlock } from "@/components/motion/reveal";
import { SurfaceFill } from "@/components/ui/surface";
import { cta, brand } from "@/lib/content";

/** Bloco 14 — CTA principal. */
export function Cta() {
  return (
    <section
      id="marcar"
      aria-labelledby="marcar-titulo"
      className="relative overflow-hidden bg-bordo-fundo text-fundo"
    >
      <SurfaceFill tone="escuro" className="opacity-80" />

      <div className="gutter relative py-section">
        {/* A fotografia ocupa o lado direito, que estava vazio. Ancorada ao
            canto e em `object-contain` para não ser cortada; o recuo negativo
            anula a goteira deste bloco, senão parava à distância da margem do
            texto em vez de encostar à borda. Vem antes do texto no documento,
            logo por baixo dele — e nem lá chega, porque o texto está limitado
            a 12ch e ela ocupa 42% da largura.
            Em telemóvel não entra: a coluna é única e o texto ocupa-a toda. */}
        {/* O deslocamento de 5% para a esquerda vale só na faixa estreita em
            que esta imagem aparece (md–lg). Abaixo de `md` ela está escondida:
            a coluna é única e o texto ocupa-a toda. Em `lg` volta ao sítio,
            que aí há largura de sobra. */}

        <p className="label mb-8 text-fundo/70">{cta.label}</p>

        <RevealText
          as="h2"
          id="marcar-titulo"
          className="mb-10 max-w-[12ch] text-[length:var(--text-display)]"
        >
          {cta.title.split("\n").map((line) => (
            <span key={line} className="ouro-metal-linhas block w-fit">
              {line}
            </span>
          ))}
        </RevealText>

        <RevealBlock>
          <p className="mb-14 max-w-[44ch] text-[length:var(--text-lead)] leading-[1.62] text-fundo/70">
            {cta.body}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* Chapa dourada com reflexo a passar, portada do atelier
                (`ouro-vivo`). Dourado chapado lia-se como mostarda; o que
                faz parecer metal é a rampa escuro→médio→especular. */}
            {/* Aponta ao formulário logo abaixo, não a `mailto:`. Um botão
                que diz "Marcar consulta" e abre o cliente de email deixava a
                marcação — que está a três dedos de scroll — por encontrar. */}
            <a
              href="#marcacao"
              className="label ouro-vivo rounded-full px-8 py-4 transition-shadow duration-500 hover:shadow-[0_0_40px_-12px_var(--color-ouro)]"
            >
              {cta.primary}
            </a>
            <a
              href={brand.booking}
              className="label rounded-full border border-fundo/35 px-8 py-4 text-fundo transition-colors duration-300 hover:border-fundo hover:bg-fundo/10"
            >
              {cta.secondary}
            </a>
          </div>

          <p className="label mt-12 text-fundo/40">{cta.note}</p>
        </RevealBlock>
      </div>
    </section>
  );
}
