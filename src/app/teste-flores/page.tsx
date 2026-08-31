/**
 * Página de teste dos clipes de buganvília com alfa reconstruído.
 *
 * Não está ligada a nada do site: existe para se ver os cinco clipes sobre o
 * fundo real (`#f3efe7`) e decidir qual usar. Apagar quando a escolha estiver
 * feita.
 *
 * O fundo é dado em hexadecimal literal, não pelo token do Tailwind, porque o
 * que se está a avaliar é precisamente se o recorte assenta nesta cor — um
 * token que mudasse de valor invalidava a comparação sem avisar.
 */

const CLIPES = ["01", "02", "03", "04", "05"] as const;

export const metadata = { title: "Teste — flores com alfa", robots: { index: false } };

export default function TesteFlores() {
  return (
    <main style={{ background: "#f3efe7", minHeight: "100vh" }} className="px-6 py-10 text-texto">
      <h1 className="font-display text-3xl">Buganvília com alfa reconstruído</h1>
      <p className="mt-3 max-w-[70ch] leading-relaxed text-texto-suave">
        Cinco clipes, 720×720, H.264 opaco com o fundo branco original. Cada um aparece
        duas vezes: sobre branco puro (como vai ficar no site) e sobre o fundo
        <code>#f3efe7</code> (para se ver porque é que o fundo não serve).
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {CLIPES.map((n) => (
          <figure key={n}>
            <div className="grid grid-cols-2">
              {(["#ffffff", "#f3efe7"] as const).map((fundo) => (
                <div key={fundo} style={{ background: fundo }}>
                  <video
                    src={`/imagens/flores-video/flores-${n}.mp4`}
                    poster={`/imagens/flores-video/flores-${n}-mp4.webp`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="block h-auto w-full"
                  />
                </div>
              ))}
            </div>
            <figcaption className="label mt-3 text-texto-fraca">
              clipe {n} — esquerda sobre branco, direita sobre fundo
            </figcaption>
          </figure>
        ))}

        <figure>
          <div style={{ background: "#f3efe7" }} className="flex aspect-square items-center justify-center border border-texto/15 p-6">
            <p className="max-w-[30ch] text-center leading-relaxed text-texto-suave">
              O fundo dos clipes é o branco original do material. Sobre branco funde-se; sobre
              o fundo vê-se o quadrado. É essa a razão de o painel das flores passar a branco.
            </p>
          </div>
          <figcaption className="label mt-3 text-texto-fraca">fundo puro #f3efe7</figcaption>
        </figure>
      </div>
    </main>
  );
}
