"use client";

import { useState } from "react";

import { RevealText, RevealBlock } from "@/components/motion/reveal";
import { SurfaceFill } from "@/components/ui/surface";

/**
 * Booking block — demonstration only.
 *
 * It stores nothing and has no backend: it validates in the browser and
 * shows the confirmation state, so a visitor can walk the whole flow. It
 * deliberately does NOT dial out or send anything, because the clinic is
 * fictional and the number is a reserved fictional one — a form that
 * pretended to reach somebody would be the one dishonest thing on the page.
 *
 * To make it real, swap `submeter` for a server action that writes to a
 * database. The rest of the component stays as it is.
 *
 * Built on React state and native HTML validation on purpose: this site has
 * neither react-hook-form nor zod, and pulling in five dependencies for a
 * five-field form was weight it did not need.
 */

const SERVICOS = [
  "Consultation",
  "Neuromodulators",
  "Dermal Fillers",
  "RF Microneedling",
  "Ultrasound Lifting",
  "Laser Treatments",
  "Medical Weight Loss",
  "Body Contouring",
  "Something else (I will explain)",
] as const;

// Monday to Friday 9:00 AM — 7:00 PM (see brand.hours). Half-hour slots
// would make the list too long for a phone select.
const HORAS = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM",
] as const;

type Dados = {
  servico: string;
  dia: string;
  hora: string;
  nome: string;
  telefone: string;
};

const VAZIO: Dados = {
  servico: SERVICOS[0],
  dia: "",
  hora: "",
  nome: "",
  telefone: "",
};

function formatarData(iso: string) {
  if (!iso) return "";
  const [ano, mes, dia] = iso.split("-");
  // US order: month before day.
  return `${mes}/${dia}/${ano}`;
}

export function Marcacao() {
  const [dados, setDados] = useState<Dados>(VAZIO);
  const [enviado, setEnviado] = useState(false);

  const hoje = new Date().toISOString().slice(0, 10);

  function alterar(campo: keyof Dados) {
    return (evento: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setDados((atual) => ({ ...atual, [campo]: evento.target.value }));
  }

  function submeter(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    // Nothing leaves the browser: see the note at the top of the file.
    setEnviado(true);
  }

  return (
    <section
      id="marcacao"
      aria-labelledby="marcacao-titulo"
      className="relative overflow-hidden bg-bordo text-fundo"
    >
      <SurfaceFill tone="escuro" className="opacity-60" />

      {/* Composição centrada em vez de encostada à esquerda.
          O formulário tem largura fixa e a secção é de largura total, por
          isso metade do ecrã ficava bordo e vazia — a página lia-se "a meio".
          Não foi preciso inventar uma segunda coluna: basta a coluna única
          passar ao centro e o título alinhar com ela. É proporção, não
          conteúdo novo. */}
      <div className="gutter relative py-section">
        <div className="mx-auto w-full max-w-[64rem]">
        <p className="label mb-8 text-fundo/70">Booking</p>

        <RevealText
          as="h2"
          id="marcacao-titulo"
          className="mb-10 max-w-[14ch] text-[length:var(--text-title)]"
        >
          <span className="ouro-metal-linhas">Escolha o seu momento.</span>
        </RevealText>

        <RevealBlock>
          {enviado ? (
            <Confirmacao
              dados={dados}
              aoRecomecar={() => {
                setDados(VAZIO);
                setEnviado(false);
              }}
            />
          ) : (
            <form
              onSubmit={submeter}
              className="w-full border border-fundo/12 bg-bordo-fundo/60 p-8 backdrop-blur-sm sm:p-12"
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <Campo label="Service" className="sm:col-span-2">
                  <select
                    required
                    value={dados.servico}
                    onChange={alterar("servico")}
                    className={CAMPO}
                  >
                    {SERVICOS.map((s) => (
                      <option key={s} value={s} className="bg-bordo-fundo text-fundo">
                        {s}
                      </option>
                    ))}
                  </select>
                </Campo>

                <Campo label="Date">
                  <input
                    required
                    type="date"
                    min={hoje}
                    value={dados.dia}
                    onChange={alterar("dia")}
                    className={CAMPO}
                  />
                </Campo>

                <Campo label="Time">
                  <select required value={dados.hora} onChange={alterar("hora")} className={CAMPO}>
                    <option value="" className="bg-bordo-fundo text-fundo/50">
                      Escolher hora
                    </option>
                    {HORAS.map((h) => (
                      <option key={h} value={h} className="bg-bordo-fundo text-fundo">
                        {h}
                      </option>
                    ))}
                  </select>
                </Campo>

                <Campo label="Name">
                  <input
                    required
                    minLength={2}
                    type="text"
                    placeholder="Your name"
                    value={dados.nome}
                    onChange={alterar("nome")}
                    className={CAMPO}
                  />
                </Campo>

                <Campo label="Phone (optional)">
                  <input
                    type="tel"
                    placeholder="(305) 555-0142"
                    value={dados.telefone}
                    onChange={alterar("telefone")}
                    className={CAMPO}
                  />
                </Campo>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                {/* Chapa dourada animada, igual à do atelier. */}
                <button
                  type="submit"
                  className="label ouro-vivo rounded-full px-8 py-4 transition-shadow duration-500 hover:shadow-[0_0_40px_-12px_var(--color-ouro)]"
                >
                  Confirm booking
                </button>
                <p className="label text-fundo/40">Same-day response</p>
              </div>
            </form>
          )}
        </RevealBlock>
        </div>
      </div>
    </section>
  );
}

function Confirmacao({ dados, aoRecomecar }: { dados: Dados; aoRecomecar: () => void }) {
  return (
    <div className="w-full border border-ouro/25 bg-bordo-fundo/60 px-8 py-16 text-center backdrop-blur-sm sm:px-12">
      <span
        aria-hidden
        className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-ouro/40 ouro-metal"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      <h3 className="mb-6 text-[length:var(--text-sub)]">Request received</h3>

      <p className="mx-auto mb-10 max-w-[46ch] text-[length:var(--text-lead)] leading-[1.62] text-fundo/70">
        Thank you, {dados.nome}. We have your request for {dados.servico} on{" "}
        {formatarData(dados.dia)} at {dados.hora}, and we will confirm with you the same day.
      </p>

      <button type="button" onClick={aoRecomecar} className="label text-fundo/70 hover:text-fundo">
        Make another booking
      </button>
    </div>
  );
}

const CAMPO =
  "w-full appearance-none border-b border-fundo/20 bg-transparent pb-3 text-[length:var(--text-lead)] font-light text-fundo outline-none transition-colors placeholder:text-fundo/35 focus:border-ouro";

function Campo({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-4 ${className ?? ""}`}>
      <span className="label text-fundo/70">{label}</span>
      {children}
    </label>
  );
}
